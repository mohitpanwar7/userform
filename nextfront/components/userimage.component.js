import React from 'react';

class UserImage extends React.Component {



    render() {
        const id = this.props.value;
        
        return (
            <div>
                <img src={`/api/files/${id}`} border={3} height={130} width={130} alt="User Image"></img>
            </div>
        );

    }
}
export default UserImage;