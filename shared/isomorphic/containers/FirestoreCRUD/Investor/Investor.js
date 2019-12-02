import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Modal from '@iso/components/Feedback/Modal';
import LayoutContentWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';
import ContentHolder from '@iso/components/utility/contentHolder';
import Popconfirms from '@iso/components/Feedback/Popconfirm';
import investorActions from '@iso/redux/investors/actions';
import {
  ActionBtn,
  Fieldset,
  Form,
  Label,
  TitleWrapper,
  ActionWrapper,
  ComponentTitle,
  TableWrapper,
  ButtonHolders,
} from './Investor.styles';
import clone from 'clone';
const {
  saveIntoFireStore,
  loadFromFireStore,
  resetFireStoreDocuments,
  toggleModal,
  update,
} = investorActions;
export default function Investors(props) {
  const { investors, investor, modalActive } = useSelector(
    state => state.Investors
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadFromFireStore());
  }, [dispatch]);
  const handleRecord = (actionName, investor) => {
    if (investor.key && actionName !== 'delete') actionName = 'update';
    dispatch(saveIntoFireStore(investor, actionName));
  };
  const resetRecords = () => {
    dispatch(resetFireStoreDocuments());
  };

  const handleModal = (investor = null) => {
    dispatch(toggleModal(investor));
  };

  const onRecordChange = (key, event) => {
    if (key) investor[key] = event.target.value;
    dispatch(update(investor));
  };

  const dataSource = [];
  Object.keys(investors).map((investor, index) => {
    return dataSource.push({
      ...investors[investor],
      key: investor,
    });
  });

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {},
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      },
    },
    {
      title: 'Company Name',
      dataIndex: 'company_name',
      key: 'company_name',
      sorter: (a, b) => {
        if (a.company_name < b.company_name) return -1;
        if (a.company_name > b.company_name) return 1;
        return 0;
      },
    },
    {
      title: 'Job Title',
      dataIndex: 'job_title',
      key: 'job_title',
      sorter: (a, b) => {
        if (a.job_title < b.job_title) return -1;
        if (a.job_title > b.job_title) return 1;
        return 0;
      },
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      sorter: (a, b) => {
        if (a.location < b.location) return -1;
        if (a.location > b.location) return 1;
        return 0;
      },
    },
    {
      title: 'Number of Investments',
      dataIndex: 'investment_count',
      key: 'investment_count',
      width: '190px',
      sorter: (a, b) =>
        parseInt(a.investment_count, 10) - parseInt(b.investment_count, 10),
    },
    {
      title: 'Number of Exists',
      dataIndex: 'exists_count',
      key: 'exists_count',
      width: '160px',
      sorter: (a, b) =>
        parseInt(a.exists_count, 10) - parseInt(b.exists_count, 10),
    },
    {
      title: 'Actions',
      width: '60px',
      key: 'action',
      render: (text, row) => {
        return (
          <ActionWrapper>
            <a onClick={() => handleModal(row)} href="# ">
              <i className="ion-android-create" />
            </a>

            <Popconfirms
              title="Are you sure to delete this record?"
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
            <ComponentTitle>Investors</ComponentTitle>

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
            title={investor.key ? 'Update investor' : 'Add New investor'}
            okText={investor.key ? 'Update investor' : 'Add investor'}
            onOk={() => handleRecord('insert', investor)}
            onCancel={() => dispatch(toggleModal(null))}
          >
            <Form>
              <Fieldset>
                <Label>Name</Label>
                <Input
                  label="Name"
                  placeholder="Enter owner name"
                  value={investor.name}
                  onChange={e => onRecordChange('name', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Company Name</Label>
                <Input
                  label="Company Name"
                  placeholder="Enter the company name"
                  value={investor.company_name}
                  onChange={e => onRecordChange('company_name', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Job TItle</Label>
                <Input
                  label="Job Title"
                  placeholder="Enter the job title"
                  value={investor.job_title}
                  onChange={e => onRecordChange('job_title', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Location</Label>
                <Input
                  label="Location"
                  placeholder="Enter Description"
                  value={investor.location}
                  onChange={e => onRecordChange('location', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Number of Investments</Label>
                <Input
                  label="Number of Investments"
                  placeholder="Enter number of investments"
                  value={investor.investment_count}
                  onChange={e => onRecordChange('investment_count', e)}
                />
              </Fieldset>

              <Fieldset>
                <Label>Number of Exists</Label>
                <Input
                  label="Number of Exists"
                  placeholder="Enter Number of Exists"
                  value={investor.exists_count}
                  onChange={e => onRecordChange('exists_count', e)}
                />
              </Fieldset>
            </Form>
          </Modal>

          <TableWrapper
            rowKey="key"
            columns={columns}
            rowSelection={rowSelection}
            loading={props.isLoading}
            dataSource={dataSource}
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
