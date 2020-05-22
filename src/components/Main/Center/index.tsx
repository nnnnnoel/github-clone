import { observer } from 'mobx-react';
import * as React from 'react';
import Histories from './Histories';
import './index.scss';

interface Props {
  onMoreButtonPress: () => void;
  isLoading: boolean;
}

const Center: React.FC<Props> = ({ onMoreButtonPress, isLoading }) => {
  return (
    <div className='col-12 col-md-8 col-lg-6 p-responsive mt-3 border-bottom d-flex flex-auto'>
      <Histories onMoreButtonPress={onMoreButtonPress} isLoading={isLoading} />
    </div>
  );
};

export default observer(Center);
