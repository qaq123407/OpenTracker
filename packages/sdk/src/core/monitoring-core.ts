import { MonitoringOptions } from '../../types/src/core/monitering-options'
import { ApiErrorMonitor } from '../../plugins/src/error/api-error/api-monitoring'
import { XoErrorMonitor } from '../../plugins/src/error/xo-error/xo-monitoring'

/**
 * 监控核心类 - 负责初始化和管理各种监控插件
 */
export class MonitoringCore {
  private options: MonitoringOptions
  private apiErrorMonitor: ApiErrorMonitor | null = null
  private xoErrorMonitor: XoErrorMonitor | null = null

  constructor(options: MonitoringOptions = {}) {
    this.options = options
  }

  /**
   * 初始化所有监控插件
   */
  public init(): void {
    // 初始化API错误监控
    if (this.options.api?.enable !== false) {
      this.apiErrorMonitor = new ApiErrorMonitor(this.options.api)
      this.apiErrorMonitor.init().catch((error) => {
        console.error('API错误监控初始化失败:', error)
      })
    }

    // 初始化跨域错误监控
    if (this.options.xoError?.enable !== false) {
      this.xoErrorMonitor = new XoErrorMonitor(this.options.xoError)
      this.xoErrorMonitor.init()
    }
  }

  /**
   * 停止所有监控
   */
  public stop(): void {
    // 这里可以添加停止监控的逻辑
    console.log('监控已停止')
  }
}
