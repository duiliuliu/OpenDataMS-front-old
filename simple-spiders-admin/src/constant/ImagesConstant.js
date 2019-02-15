export const RightIconUrl = './icon/interesting.gif'
export const SpiderIconUrl = './icon/spider.svg'
export const ProcessIconUrl = './icon/process.svg'
export const NewIconUrl = './icon/new.svg'
export const DataIconUrl = './icon/database.svg'

const requireContext = require.context("../../public/icon/userHeader", true, /^\.\/.*\.svg$/);
export const userHeaderUrls = requireContext.keys().map(requireContext);

