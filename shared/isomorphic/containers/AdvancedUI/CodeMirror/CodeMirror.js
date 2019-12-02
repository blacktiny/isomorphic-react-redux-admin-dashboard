import React from 'react';
import { Row, Col } from 'antd';
import Switch from '@iso/components/uielements/switch';
import Select, { SelectOption } from '@iso/components/uielements/select';
import Form from '@iso/components/uielements/form';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import basicStyle from '@iso/assets/styles/constants';
import { switchOptions, selectOptions, defaultValues } from './config';
import CodeMirror, { CodeMirrorToolbar } from './CodeMirror.styles';

const FormItem = Form.Item;
const Option = SelectOption;

export default function() {
  const [state, setState] = React.useState({
    ...defaultValues,
    basicOptions: {
      lineNumbers: true,
      readOnly: false,
      tabSize: 4,
      mode: 'javascript',
      theme: 'zenburn',
    },
  });

  function updateCode(mode, value) {
    setState({
      ...state,
      [mode]: value,
    });
  }
  function toggleOptions() {
    const { basicOptions } = state;
    return switchOptions.map((option, index) => {
      const id = option.id;
      const onChange = () => {
        basicOptions[id] = !basicOptions[id];
        setState({ ...state, basicOptions });
      };
      return (
        <FormItem label={option.title} key={option.id}>
          <Switch
            checked={option.value === basicOptions[id]}
            onChange={onChange}
          />
        </FormItem>
      );
    });
  }
  function selctOptions() {
    const { basicOptions } = state;
    return selectOptions.map((option, index) => {
      const id = option.id;
      const handleChange = value => {
        basicOptions[id] = isNaN(value) ? value : parseInt(value, 10);
        setState({ ...state, basicOptions });
      };
      return (
        <FormItem label={option.title} key={option.id}>
          <Select defaultValue={`${basicOptions[id]}`} onChange={handleChange}>
            {option.options.map(opt => (
              <Option value={opt} key={opt}>
                {opt}
              </Option>
            ))}
          </Select>
        </FormItem>
      );
    });
  }
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>Code Mirror</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={24} sm={24} xs={24} style={colStyle}>
          <Box title="Basic Example">
            <ContentHolder>
              <CodeMirrorToolbar className="isoOptionWrapper">
                {toggleOptions()}
                {selctOptions()}
              </CodeMirrorToolbar>
              <CodeMirror
                value={state.basic}
                onChange={value => updateCode('basic', value)}
                options={state.basicOptions}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Ruby Example">
            <ContentHolder>
              <CodeMirror
                value={state.ruby}
                onChange={value => updateCode('ruby', value)}
                options={{ lineNumbers: true, theme: 'hopscotch' }}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Javascript Example">
            <ContentHolder>
              <CodeMirror
                value={state.javascript}
                onChange={value => updateCode('javascript', value)}
                options={{ lineNumbers: true, theme: 'twilight' }}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Markdown Example">
            <ContentHolder>
              <CodeMirror
                value={state.markdown}
                onChange={value => updateCode('markdown', value)}
                options={{ lineNumbers: true, theme: 'rubyblue' }}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="XML Example">
            <ContentHolder>
              <CodeMirror
                value={state.xml}
                onChange={value => updateCode('xml', value)}
                options={{ lineNumbers: true, theme: 'paraiso-dark' }}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="PHP Example">
            <ContentHolder>
              <CodeMirror
                value={state.php}
                onChange={value => updateCode('php', value)}
                options={{ lineNumbers: true, theme: 'midnight' }}
              />
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title="Python Example">
            <ContentHolder>
              <CodeMirror
                value={state.python}
                onChange={value => updateCode('python', value)}
                options={{ lineNumbers: true, theme: 'material' }}
              />
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
