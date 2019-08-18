import React from 'react';


const styles = {
    width: '200px',
    height:'200px',
    marginRight: '10px'
};


const PlaceThumnail = (props) => {
    let image = null;
    let apiURL = 'http://localhost:8001';
    if (props.image !== '') {
        image = apiURL + '/uploads/' + props.image;
    }

    return <div>{image && <img src={image} style={styles} className="img-thumbnail" alt="faiza"/>}</div>;
};

export default PlaceThumnail
