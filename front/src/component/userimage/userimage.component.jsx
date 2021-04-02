import React from 'react';

class UserImage extends React.Component {



    render() {
        const id = this.props.value;
        
        return (
            <div>
                <img src={`http://localhost:5000/files/${id}`} border={3} height={100} width={100}></img>
            </div>
        );

    }
}
export default UserImage;