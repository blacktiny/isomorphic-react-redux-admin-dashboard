import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import articleActions from '@iso/redux/articles/actions';
import Input, { Textarea } from '@iso/components/uielements/input';
import Select, {
  SelectOption as Option,
} from '@iso/components/uielements/select';
import Modal from '@iso/components/Feedback/Modal';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import Popconfirms from '@iso/components/Feedback/Popconfirm';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ButtonHolders,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  StatusTag,
} from './Article.styles';
const {
  loadFromFireStore,
  resetFireStoreDocuments,
  saveIntoFireStore,
  toggleModal,
  update,
} = articleActions;
export default function Articles() {
  const { articles, article, modalActive, isLoading } = useSelector(
    state => state.Articles
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadFromFireStore());
  }, [dispatch]);
  const handleRecord = (actionName, article) => {
    if (article.key && actionName !== 'delete') actionName = 'update';
    dispatch(saveIntoFireStore(article, actionName));
  };
  const resetRecords = () => {
    dispatch(resetFireStoreDocuments());
  };

  const handleModal = (article = null) => {
    dispatch(toggleModal(article));
  };

  const onRecordChange = (event, key) => {
    if (key) article[key] = event.target.value;
    dispatch(update(article));
  };

  const onSelectChange = (key, value) => {
    if (key) article[key] = value;
    dispatch(update(article));
  };

  const dataSource = [];
  Object.keys(articles).map((article, index) => {
    return dataSource.push({
      ...articles[article],
      key: article,
    });
  });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: '200px',
      sorter: (a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = sentence => {
          let result = sentence;
          let resultArray = result.split(' ');
          if (resultArray.length > 7) {
            resultArray = resultArray.slice(0, 7);
            result = resultArray.join(' ') + '...';
          }
          return result;
        };

        return trimByWord(row.title);
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: '360px',
      sorter: (a, b) => {
        if (a.description < b.description) return -1;
        if (a.description > b.description) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = sentence => {
          let result = sentence;
          let resultArray = result.split(' ');
          if (resultArray.length > 20) {
            resultArray = resultArray.slice(0, 20);
            result = resultArray.join(' ') + '...';
          }
          return result;
        };

        return trimByWord(row.description);
      },
    },
    {
      title: 'Excerpt',
      dataIndex: 'excerpt',
      key: 'excerpt',
      width: '220px',
      sorter: (a, b) => {
        if (a.excerpt < b.excerpt) return -1;
        if (a.excerpt > b.excerpt) return 1;
        return 0;
      },
      render: (text, row) => {
        const trimByWord = sentence => {
          let result = sentence;
          let resultArray = result.split(' ');
          if (resultArray.length > 8) {
            resultArray = resultArray.slice(0, 8);
            result = resultArray.join(' ') + '...';
          }
          return result;
        };

        return trimByWord(row.excerpt);
      },
    },
    {
      title: 'Slugs',
      dataIndex: 'slug',
      width: '170px',
      key: 'slug',
      sorter: (a, b) => {
        if (a.slug < b.slug) return -1;
        if (a.slug > b.slug) return 1;
        return 0;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      className: 'noWrapCell',
      key: 'status',
      sorter: (a, b) => {
        if (a.status < b.status) return -1;
        if (a.status > b.status) return 1;
        return 0;
      },

      render: (text, row) => {
        let className;
        if (row.status === ('draft' || 'Draft' || 'DRAFT')) {
          className = 'draft';
        } else if (row.status === ('publish' || 'Publish' || 'PUBLISH')) {
          className = 'publish';
        }
        return <StatusTag className={className}>{row.status}</StatusTag>;
      },
    },
    {
      title: 'Actions',
      key: 'action',
      width: '60px',
      className: 'noWrapCell',
      render: (text, row) => {
        return (
          <ActionWrapper>
            <a onClick={() => handleModal(row)} href="# ">
              <i className="ion-android-create" />
            </a>

            <Popconfirms
              title="Are you sure to delete this article？"
              okText="Yes"
              cancelText="No"
              placement="topRight"
              onConfirm={() => handleRecord('delete', row)}
            >
              <a className="deleteBtn" href="# ">
                <i className="ion-android-delete" />
              </a>
            </Popconfirms>
          </ActionWrapper>
        );
      },
    },
  ];

  return (
    <LayoutContentWrapper>
      <Box>
        <ContentHolder style={{ marginTop: 0, overflow: 'hidden' }}>
          <TitleWrapper>
            <ComponentTitle>Articles</ComponentTitle>

            <ButtonHolders>
              <ActionBtn type="danger" onClick={resetRecords}>
                Reset record
              </ActionBtn>

              <ActionBtn type="primary" onClick={() => handleModal(null)}>
                Add new record
              </ActionBtn>
            </ButtonHolders>
          </TitleWrapper>

          <Modal
            visible={modalActive}
            onClose={() => dispatch(toggleModal(null))}
            title={article.key ? 'Update Article' : 'Add New Article'}
            okText={article.key ? 'Update Article' : 'Add Article'}
            onOk={() => handleRecord('insert', article)}
            onCancel={() => dispatch(toggleModal(null))}
          >
            <Form>
              <Fieldset>
                <Label>Title</Label>
                <Input
                  label="Title"
                  placeholder="Enter Title"
                  value={article.title}
                  onChange={e => onRecordChange(e, 'title')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Description</Label>
                <Textarea
                  label="Description"
                  placeholder="Enter Description"
                  rows={5}
                  value={article.description}
                  onChange={e => onRecordChange(e, 'description')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Excerpt</Label>
                <Textarea
                  label="Excerpt"
                  rows={5}
                  placeholder="Enter excerpt"
                  value={article.excerpt}
                  onChange={e => onRecordChange(e, 'excerpt')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Slug</Label>

                <Input
                  label="Slug"
                  placeholder="Enter Slugs"
                  value={article.slug}
                  onChange={e => onRecordChange(e, 'slug')}
                />
              </Fieldset>

              <Fieldset>
                <Label>Status</Label>
                <Select
                  defaultValue={article.status}
                  placeholder="Enter Status"
                  onChange={value => onSelectChange('status', value)}
                  style={{ width: '170px' }}
                >
                  <Option value="draft">Draft</Option>
                  <Option value="publish">Publish</Option>
                </Select>
              </Fieldset>
            </Form>
          </Modal>
          <TableWrapper
            rowKey="key"
            rowSelection={rowSelection}
            columns={columns}
            bordered={true}
            dataSource={dataSource}
            loading={isLoading}
            className="isoSimpleTable"
            pagination={{
              // defaultPageSize: 1,
              hideOnSinglePage: true,
              total: dataSource.length,
              showTotal: (total, range) => {
                return `Showing ${range[0]}-${range[1]} of ${
                  dataSource.length
                } Results`;
              },
            }}
          />
        </ContentHolder>
      </Box>
    </LayoutContentWrapper>
  );
}
