import React, { memo, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classnames from 'classnames';
import { createUseStyles, useTheme } from 'react-jss';
import { MessagesActions } from 'actions';
import Spinner from 'components/Spinner';
import UserHeader from './UserHeader';
import NewMessage from './NewMessage';
import Message from './Message';
import styles from './styles';

const mapStateToProps = (state) => {
    return {
        loading: state.timeline.loading || false,
        error: state.timeline.error || false,
        messages: state.timeline.messages || [],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMessages: bindActionCreators(MessagesActions, dispatch).getMessages,
    };
};

const useStyles = createUseStyles(styles);

const Timeline = memo(({ userTimeline, isMain, messages, loading, getMessages }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });

    const rootClassName = classnames('timeline', classes.timeline);
    const containerClassName = classnames('timeline-container', classes.container);
    const loadingClassName = classnames(classes.loading);

    const content = useMemo(() => {
        if (!messages?.length) return null;
        return messages.map((message) => {
            return <Message key={message.id} message={message} />;
        });
    }, [messages]);

    useEffect(() => {
        getMessages(userTimeline);
    }, [getMessages, userTimeline]);

    return (
        <div className={rootClassName}>
            {!isMain && <UserHeader username={userTimeline} />}
            {isMain && <NewMessage />}
            <div className={containerClassName}>
                {loading && (
                    <div className={loadingClassName}>
                        <Spinner />
                    </div>
                )}
                {content}
            </div>
        </div>
    );
});

Timeline.propTypes = {
    userTimeline: PropTypes.string,
    messages: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.bool,
    isMain: PropTypes.bool,
    getMessages: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
