import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateHeroImage } from '../../actions/Actions';
import './MainContent.css';
import logger from '../../logger';

const MainContent = ({ children }) => {
  const [setLogs] = useState([]);
  const dispatch = useDispatch();

  // Use an effect to log when the component is rendered and fetch the latest logs
  useEffect(() => {
    try {
      logger.log('MainContent component rendered');
      const latestLogs = logger.getLatestLogs();
      // Do something with latestLogs
      setLogs(latestLogs);
    } catch (error) {
      logger.log(`Error while logging MainContent component render: ${error}`);
    }
  },);

  const onArticleImageClick = (imageUrl) => {
    dispatch(updateHeroImage(imageUrl));
  };

  return (
    <div className="main-content">
      {React.Children.map(children, (child) => {
        if (child === null) {
          return null;
        }

        // Check if the child component has the expected ArticleList props
        if (child.props.onArticleImageClick !== undefined) {
          return React.cloneElement(child, {
            onArticleImageClick,
          });
        }
        return child;
      })}
    </div>
  );
};

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
