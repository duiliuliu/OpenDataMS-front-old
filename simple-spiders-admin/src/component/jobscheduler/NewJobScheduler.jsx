import React from 'react'
import {
  Input, Form, Select, Switch, Radio, Button, Upload, Icon, Row, Col, InputNumber
} from 'antd';

const { Option } = Select;

const cityList = ["佛山","哈尔滨","贵州","深圳"];
const urlList = {
  "":[],
  "佛山":["www.foshan"],
  "哈尔滨":["www.haerbi","www.haerbi2222"],
  "深圳":["www.foshan"],
  "贵州":["www.foshan"]
}

const dataList = ["全部","水利工程数据","特种兵数据","**数据"]
// const item = [
//   {"city":"佛山","url":["www.foshan"]},
//   {"city":"哈尔滨","url":["www.haerbi","www.haerbi2222"]},
//   {"city":"深圳","url":["www.foshan"]},
//   {"city":"贵州","url":["www.foshan"]}
// ]

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

  handleCityChange = (value)=>{
    this.setState({
      city:value
    });
  }

  handleUrlChange = (value)=>{
    this.setState({
      url:value
    });
  }

  handleThreadChange = (e)=>{
    this.setState({
      thread:e.target.value
    });
  }

  handleOriginChange = (value)=>{
    this.setState({
      isSaveOrigin:value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
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
          label="任务名称"
        >
          <Input placeholder="input placeholder" />
        </Form.Item>
        <Form.Item
          {...formItemLayout}
          label="URL"
          hasFeedback
        >
          {getFieldDecorator('select-group', {
            rules: [
              { required: true, message: 'Please select your city!' },
            ],
          })(
              <Row>
                <Col span={12}>
                  <Select onChange={this.handleCityChange} placeholder="Please select a city">
                  {
                    cityList.map((city)=>{
                      return <Option key={city} value={city}>{city}</Option>
                    })
                  }
                  </Select>
                </Col>
                <Col span={12}>
                  <Select onChange={this.handleUrlChange} placeholder="Please select a URL">
                  {
                    urlList[this.state.city].map((url)=>{
                      return <Option value={url} key={url}>{url}</Option>
                    })
                  }
                  </Select>
                </Col>
              </Row>
          )}

          {getFieldDecorator('radio-group')(
            <Row>
              <Col span={10}>
                <Radio.Group onChange={this.handleThreadChange}>
                  <Radio value={1}>单线程</Radio>
                  <Radio value={2}>多线程</Radio>
                </Radio.Group>
              </Col>
              { this.state.thread > 1 ?
                <Col span={8} >
                  <span>线程数: </span>
                  {getFieldDecorator('input-number', { initialValue: 3 })(
                    <InputNumber min={1} max={10} />
                  )}
                </Col> : null
              }
            </Row>
          )}
        </Form.Item>

        <Form.Item
          {...formItemLayout}
          label="数据类目"
        >
          {getFieldDecorator('Select-multiple', {
            rules: [
              { required: true, message: 'Please select your target data!', type: 'array' },
            ],
          })(
            <div>
              <Select mode="multiple" placeholder="Please select target data">
                {
                  dataList.map((item)=>{
                    return <Option value={item} key={item}>{item}</Option>
                  })
                }
              </Select>
              {getFieldDecorator('switch', { valuePropName: 'checked' })(
                <Switch onChange={this.handleOriginChange} />
              )}
              <span style={{marginRight:"40px",marginLeft:"10px"}}>    保存至本地  </span>
              {
                this.state.isSaveOrigin ? 
                getFieldDecorator('upload', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload name="logo" action="/download.do" listType="picture">
                    <Button>
                      <Icon type="download" />  save
                    </Button>
                  </Upload>
                ) :　null
              }
            </div>
          )}
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

const NewJobScheduler = Form.create({ name: 'validate_other' })(JobForm);
export default NewJobScheduler;