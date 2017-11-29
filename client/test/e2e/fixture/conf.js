let { resolve } = require('path')

module.exports = {
    src_folders: [resolve('client','test', 'e2e', 'spec')],
    output_folder: resolve('client','test', 'e2e', 'report')
}
