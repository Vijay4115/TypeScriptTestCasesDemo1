import React,{ Component } from "react";

interface Props {
    navigation: any;
    route: any;
  }
  interface Ss {
    name: string;
    nasa_jpl_url: any;
    hazardous_asteroid: any;
    random_id:any,
  }
export default class SecondController extends Component <Props,Ss,{}>{


    getSubmit(){
        let dta = this.props.route.params?.apiRes;
        if (dta) {
          this.setState({
            name: dta.name,
            nasa_jpl_url: dta.nasa_jpl_url,
            hazardous_asteroid: JSON.stringify(
              dta.is_potentially_hazardous_asteroid
            ),
          });
        }
        console.log(dta.name, dta.nasa_jpl_url ,dta.is_potentially_hazardous_asteroid );
        
    }
    componentDidMount() {
    this.getSubmit();
  }
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      nasa_jpl_url: null,
      hazardous_asteroid: null,
      random_id:null,
    };
  }}