import React from 'react';
import AutoComplete, { AutoCompleteOption } from '../uielements/autocomplete';
import UserItem from './InputName.style';

export default function(props) {
  const [state, setState] = React.useState({
    value: '',
    result: [],
  });

  const handleSearch = value => {
    const result = [];
    if (value) {
      props.users.forEach(user => {
        if (user.name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
          result.push(user);
        }
      });
    }
    setState({ ...state, result, value });
  };
  const onSelect = id => {
    if (id) {
      state.result.forEach(user => {
        if (user.id === id) {
          setState({ ...state, value: user.name });
        }
      });
    }
  };
  const { result, value } = state;
  return (
    <AutoComplete
      value={value}
      onSelect={onSelect}
      onSearch={handleSearch}
      placeholder="find your buddy"
      style={{ marginBottom: 10 }}
    >
      {result.map(user => (
        <AutoCompleteOption key={user.id} style={{ display: 'flex' }}>
          <UserItem
            onClick={() => {
              setState({ ...state, value: user.name, result: [] });
              props.setComposedId(user.id);
            }}
          >
            <div className="userImg">
              <img alt="#" src={user.profileImageUrl} />
            </div>

            <span className="suggetionText">{user.name}</span>
          </UserItem>
        </AutoCompleteOption>
      ))}
    </AutoComplete>
  );
}
