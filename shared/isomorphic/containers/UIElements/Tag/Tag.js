import React from 'react';
import { Row, Col, Input } from 'antd';
import Tags from '@iso/components/uielements/tag';
// import Input from '@iso/components/uielements/input';
import Tooltip from '@iso/components/uielements/tooltip';
import Button from '@iso/components/uielements/button';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import TagWrapper from './Tag.styles';

const CheckableTag = Tags.CheckableTag;

const Tag = props => (
  <TagWrapper>
    <Tags {...props}>{props.children}</Tags>
  </TagWrapper>
);

const tagsFromServer = ['Movie', 'Books', 'Music'];

export default function() {
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [tags, setTags] = React.useState(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  let inputRef = React.useRef(null);
  const log = e => {};
  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  };
  const preventDefault = e => {
    e.preventDefault();
  };
  const handleClose = removedTag => {
    const newTags = tags.filter(tag => tag !== removedTag);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  React.useEffect(() => {
    if (inputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputVisible]);

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    let newTags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      newTags = [...tags, inputValue];
    }
    setTags(newTags);
    setInputVisible(false);
    setInputValue('');
  };

  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="uiElements.tags.tags" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tags.basicExample" />}
            subtitle={
              <IntlMessages id="uiElements.tags.basicExampleSubTitle" />
            }
          >
            <ContentHolder>
              <Tag>{<IntlMessages id="uiElements.tags.tagOne" />}</Tag>
              <Tag>
                <a href="https://isomorphic.redq.io/dashboard/op_tag">
                  {<IntlMessages id="uiElements.tags.link" />}
                </a>
              </Tag>
              <Tag closable onClose={log}>
                {<IntlMessages id="uiElements.tags.tagTwo" />}
              </Tag>
              <Tag closable onClose={preventDefault}>
                {<IntlMessages id="uiElements.tags.preventDefault" />}
              </Tag>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box title={<IntlMessages id="uiElements.tags.colorfulTag" />}>
            <ContentHolder>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tags.hotTags" />}
            subtitle={<IntlMessages id="uiElements.tags.hotTagsSubTitle" />}
          >
            <ContentHolder>
              <strong>{<IntlMessages id="uiElements.tags.hots" />} </strong>
              {tagsFromServer.map(tag => (
                <CheckableTag
                  key={tag}
                  checked={selectedTags.indexOf(tag) > -1}
                  onChange={checked => handleChange(tag, checked)}
                >
                  {tag}
                </CheckableTag>
              ))}
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="uiElements.tags.addRemoveDynamically" />}
            subtitle={
              <IntlMessages id="uiElements.tags.addRemoveDynamicallySubTitle" />
            }
          >
            <ContentHolder>
              {tags.map((tag, index) => {
                const isLongTag = tag.length > 20;
                const tagElem = (
                  <Tag
                    key={tag}
                    closable={index !== 0}
                    onClose={() => handleClose(tag)}
                  >
                    {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                  </Tag>
                );
                return isLongTag ? (
                  <Tooltip title={tag}>{tagElem}</Tooltip>
                ) : (
                  tagElem
                );
              })}
              {inputVisible && (
                <Input
                  ref={inputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputConfirm}
                  onPressEnter={handleInputConfirm}
                />
              )}
              {!inputVisible && (
                <Button size="small" type="dashed" onClick={showInput}>
                  {<IntlMessages id="uiElements.tags.newTag" />}
                </Button>
              )}
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
