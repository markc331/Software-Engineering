import * as React from 'react';
import ProgressTracker from './ProgressTracker';
import Sidebar from '../UserInfoView/Sidebar';
import { getTask } from '../RequestOptions/task-requests';

const ProgressTrackerPage = () => {
    return (
      <section class="main">
        <section class="sidebar" id="sidebar">
                <Sidebar />
        </section>
        <section>
            <ProgressTracker />
        </section>
    </section>
    );
  };

export default ProgressTrackerPage;
