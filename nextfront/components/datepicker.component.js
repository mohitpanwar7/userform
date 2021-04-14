import React from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import { Button } from 'react-bootstrap';


class DatePicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ranges: {
                startDate: new Date(),
                endDate: addDays(new Date(), -7),
                key: 'selection'
            }

        }
    }
    handleSelect = (ranges) => {
        console.log(ranges);
        const selection = ranges.selection
        console.log(selection);
        this.props.handleChildState(selection)
    }
    
    render() {

        return (
            <div>
                <div style={{ marginTop: '10px' , textAlign:'center'}}>
                    <DateRangePicker
                        onChange={this.handleSelect}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={3}
                        ranges={[this.props.ranges]}
                        direction="horizontal"
                    />

                </div>
                
            </div>
        )
    }
}

export default DatePicker;