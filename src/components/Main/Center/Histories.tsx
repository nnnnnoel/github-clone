import { observer } from 'mobx-react';
import * as React from 'react';
import styled from 'styled-components';
import { TimelineHistory } from '../../../../@types';
import DashboardStore from '../../../store/DashboardStore';
import Create from './History/Create';
import Fork from './History/Fork';
import Watch from './History/Watch';

interface Props {
  onMoreButtonPress: () => void;
  isLoading: boolean;
}

const Container = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
  padding: 0 24px;
  flex: 1;
`;

const Histories: React.FC<Props> = ({ onMoreButtonPress, isLoading }) => {
  const onClick = React.useCallback(async () => {
    if (!isLoading) onMoreButtonPress();
  }, [onMoreButtonPress, isLoading]);

  const renderHistory = React.useCallback((history: TimelineHistory) => {
    switch (history.type) {
      case 'ForkEvent':
        return <Fork item={history} key={history.id} />;
      case 'WatchEvent':
        return <Watch item={history} key={history.id} />;
      case 'CreateEvent':
        return <Create item={history} key={history.id} />;
      default:
        return null;
    }
  }, []);

  return (
    <Container>
      {DashboardStore.timeline.history.map(renderHistory)}
      <button type='button' className='ajax-pagination-btn' onClick={onClick}>
        {isLoading ? '로딩중...' : 'More'}
      </button>
    </Container>
  );
};

export default observer(Histories);
