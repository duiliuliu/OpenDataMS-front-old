import React from 'react'
import {
  Input, Form,  Button, Upload, Icon, Switch,  Col
} from 'antd';

class JobForm extends React.Component {

  constructor(props){
    super(props);
    this.state={
      city:"",
      thread:1,
      url:"",
      isSaveOrigin:false
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 7 },
      wrapperCol: { span: 8 },
    };
    return (
      <Form onSubmit={this.handleSubmit}>

      <Form.Item
          {...formItemLayout}
          label="注册函数名"
        >
        {getFieldDecorator('select-group', {
            rules: [
              { required: true, message: '请输入注册函数名称 !' },
            ],
          })(
          <Input placeholder="输入注册函数名称！" />
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="关联资源类名"
        >
        {getFieldDecorator('select-group', {
            rules: [
              { required: true, message: '请输入关联资源类名 !' },
            ],
          })(
          <Input placeholder="输入关联资源类名！" />
          )}
          <Col   span={6}>
          <span>覆盖同名资源</span>
            </Col>
          <Col   span={4}>
        {getFieldDecorator('switch', { valuePropName: 'checked' })(
              <Switch onChange={this.handleOriginChange} />
            )}
            </Col>
        </Form.Item>

        

        <Form.Item
          {...formItemLayout}
          label="上传资源"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              rules: [
                { required: true, message: '请上传资源 !' },
              ],
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 7, offset: 8 }}
        >
          <Button type="primary" htmlType="submit" style={{margin:10}}>Submit</Button>
          <Button type="danger" htmlType="cancel" style={{margin:10}}>取消</Button>
        </Form.Item>
      </Form>
    );
  }
}

const FunctionRegister = Form.create({ name: 'validate_other' })(JobForm);
export default FunctionRegister;