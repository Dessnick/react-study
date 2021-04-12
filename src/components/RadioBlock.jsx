import React from 'react';

import Radio from '@material-ui/core/Radio/Radio';

const RadioBlock = ({ methodID, handleChangeInput, itemId }) => {
  return <Radio checked={methodID === itemId} onChange={handleChangeInput} value={itemId} />;
};

export default RadioBlock;
