import React, { useState } from 'react';
import { Input, List, Avatar, Mentions, Button, Tooltip } from 'antd';
import moment from 'moment';
import styles from './CommentArea.module.scss';
import { generateRandomString } from '../../utils';

const { TextArea } = Input;

const CommentArea = () => {
  const [comments, setComments] = useState([{
    // Mock Data
    author: "Michel",
    email: 'mock@gmail.com',
    avatar: "https://api.dicebear.com/8.x/notionists/svg?seed=zeka",
    content: "can we change carrier to SF?",
    datetime: "2024-06-11 13:58:25",
    id: "NzGq3L23u",
    replies: []
  }]);
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState(null);
  const [showMentions, setShowMentions] = useState(false);

  const mockUser = {
    id: generateRandomString(8),
    author: 'MonoYan',
    email: 'yanshencc@gmail.com',
    avatar: `https://api.dicebear.com/8.x/notionists/svg?seed=Aneka`,
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCancel = () => {
    setShowMentions(false);
    setReplyTo('')
    setNewComment('');
  };


  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: mockUser.id,
        author: mockUser.author,
        avatar: mockUser.avatar,
        email: mockUser.email,
        content: newComment.trim(),
        datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
        replies: [],
      };

      if (replyTo) {
        const updatedComments = addReplyToComment(comments, replyTo, newCommentObj);
        setComments(updatedComments);
      } else {
        setComments([...comments, newCommentObj]);
      }

      setNewComment('');
      setReplyTo(false);
    }
  };

  const addReplyToComment = (comments, replyToId, newReply) => {
    return comments.map(comment => {
      if (comment.id === replyToId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      } else if (comment.replies.length > 0) {
        return {
          ...comment,
          replies: addReplyToComment(comment.replies, replyToId, newReply),
        };
      }
      return comment;
    });
  };

  const handleReply = (comment) => {
    setShowMentions(true)
    setReplyTo(comment.id);
    setNewComment(`@${comment.author}: `);
  };

  const renderComment = (comment) => (
    <div key={comment.id}>
      <div className={styles.commentContent}>
        <div className={styles.avatar}>
          <Avatar size={46} src={comment.avatar} />
        </div>
        <div className={styles.commentDetails}>
          <div className={styles.commentMeta}>
            <Tooltip title={comment.email} color='#A9A9A9'>
              <span className={styles.commentAuthor}>{comment.author}</span>
            </Tooltip>
            <span className={styles.commentTime}>{moment(comment.datetime).fromNow()}</span>
          </div>
          <div className={styles.commentText}>
            <Mentions
              value={comment.content}
              autoSize={{ minRows: 1, maxRows: 6 }}
              readOnly
              options={comments.map((c) => ({
                key: c.id,
                value: `@${c.author}`,
                label: c.author,
              }))}
            />
          </div>
          <div className={styles.commentActions}>
            <Button type="link" onClick={() => handleReply(comment)} className={styles.replyButton}>
              Reply
            </Button>
          </div>
        </div>
      </div>
      {replyTo === comment.id && (
        showMentions && <div className={styles.replyInput}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <Avatar size={46} src={mockUser.avatar} />
            </div>
            <TextArea
              rows={2}
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a reply..."
              className={styles.commentInput}
            />
          </div>

          <div className={styles.submitButton}>
            <Button type="link" onClick={handleCancel}>
              Cancel
            </Button>
            <Button onClick={handleCommentSubmit} type="primary">
              Submit
            </Button>
          </div>
        </div>
      )}
      {comment.replies.length > 0 && (
        <div className={styles.replyList}>
          {comment.replies.map(renderComment)}
        </div>
      )}
    </div>
  );

  return (
    <div className={styles.commentArea}>
      <List
        dataSource={comments}
        header={<div className={styles.Title}>{`${comments.length} ${comments.length > 1 ? 'comments' : 'comment'}`}</div>}
        itemLayout="vertical"
        className={styles.commentItem}
        renderItem={(comment) => (
          <List.Item>
            {renderComment(comment)}
          </List.Item>
        )}
      />
      {!replyTo && (
        <div className={styles.commentForm}>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>
              <Avatar size={46} src={mockUser.avatar} />
            </div>
            <TextArea
              rows={2}
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className={styles.commentInput}
            />
          </div>
          <div className={styles.submitButton}>
            <Button onClick={handleCommentSubmit} type="primary">
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommentArea;
