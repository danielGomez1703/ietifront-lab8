import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import BrandCardHeader from '@mui-treasury/components/cardHeader/brand';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import Typography from '@material-ui/core/Typography';
export class Task extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        var cardStyle = {
            justifyContent: 'center',
            alignContent: 'center',
            display: 'block',
            width: '60vw',
            transitionDuration: '0.3s',
            height: '30vw'
        }
        return (
            <div>
                <br />
                <center>
                    <Card style={cardStyle}>
                        <BrandCardHeader
                            image={
                                'https://www.universidadesenbogota.com/wp-content/uploads/logo-eci.jpg'
                            }
                            extra={"USER : " + this.props.responsible.name}
                        />
                        <CardContent>
                            <TextInfoContent
                                overline={'mail : ' + this.props.responsible.mail}
                                heading={'status: ' + this.props.status}
                                body={this.props.dueDate}                        
                            />
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.descripcion}
                            </Typography>
                        </CardContent>
                    </Card>
                </center>
                <hr />
                <br/>
            </div>
          
        );
    }

}