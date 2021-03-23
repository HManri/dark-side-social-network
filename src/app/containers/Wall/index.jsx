import React, { memo } from 'react';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { useParams } from 'react-router-dom';

import MenuBar from 'containers/components/MenuBar';
import FollowingBoard from 'containers/components/FollowingBoard';
import FollowSearch from 'containers/components/FollowSearch';
import Timeline from 'containers/components/Timeline';

import styles from './styles';

const useStyles = createUseStyles(styles);

const Wall = memo(() => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const { user } = useParams();

    const rootClassName = classnames('wall', classes.wall);
    const leftSideClassName = classnames('wall-menu', classes.left);
    const rightSideClassName = classnames('wall-container', classes.right);

    return (
        <div className={rootClassName}>
            <MenuBar />
            <div className={leftSideClassName}>
                <FollowingBoard />
                {!user && <FollowSearch />}
            </div>
            <div className={rightSideClassName}>
                <Timeline userTimeline={user} isMain={!user} />
            </div>
        </div>
    );
});

export default Wall;
