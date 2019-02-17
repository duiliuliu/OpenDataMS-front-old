export const Root = '/'

const alias = '/simple-spiders-admin'

// 主页
export const Home = alias

// 任务管理
export const JobScheduler = alias + '/jobscheduler'
export const NewJobScheduler = alias + '/newjobscheduler'
export const CurrentJobScheduler = alias + '/currentjobscheduler'
export const HistoryJobScheduler = alias + '/historyjobscheduler'


// 数据管理
export const DataView = alias + '/dataview'
// 元数据  类似与文件管理那样查看
// 格式数据  list选择数据，之后二维表展示
// 数据下载日志

// 论坛
export const History = alias + '/history'