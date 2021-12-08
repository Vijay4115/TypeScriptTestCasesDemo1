 import { Component } from "react";
import axios from "axios";

const api = "T2ZXPNtpnIND1j3eEW33UY8FFUqZF0vdGJcbRL3r";
const url = "https://api.nasa.gov/neo/rest/v1/neo/";

interface Prop {
    navigation: any;
  }
  interface Ss {
    id: string;
    api_data: [];
    isloader: boolean;
  }

export default class FirstController extends Component <Prop,Ss,{}>{

    constructor(props:Prop){
        super(props);
        this.state = {
            id: "",
            api_data: [],
            isloader: false,
          };
    }

    onSubmitPress = () => {
        this.setState({ isloader: true });
        var self = this;
    
        let str = url + this.state.id + "?api_key=" + api;
    
        
          axios
            .get(str)
            // console.log(str);
            
            .then(function (response: any) {
              self.setState({ api_data: response.data });
              self.setState({ id: "" });
              
              self.props.navigation.navigate("Second", { apiRes: response.data });
              self.setState({ isloader: false });
            })
            .catch(function (error) {
              console.log(error, "ERROR");
              if (error.response.status == 404) {
                alert("Asteroid Not Found");
                self.setState({isloader:false,id: ""})
              }
            });
        
      };
    
      onRandomPress = () => {
        this.setState({ isloader: true });
        var self = this;
        let str = url + "browse?api_key=" + api;
        console.log("url string==>", str);
        axios
          .get(str)
          .then((response) => {
            console.log(str);
            self.factorData(response.data.near_earth_objects);
          })
          .catch(function (error) {
            console.log("Error=>", error);
          });
      };
    
      factorData = (arr: []) => {
        var self = this;
        const ids: string[] = [];
        arr.map((val: any) => {
          ids.push(val.id);
        });
        var item = ids[Math.floor(Math.random() * ids.length)];
        let str = url + item + "?api_key=" + api;
        try {
          axios
            .get(str)
            .then(function (response: any) {
              self.setState({ api_data: response.data, isloader: false, id: "" });
              self.props.navigation.navigate("Second", { apiRes: response.data });
            })
            .catch(function (error) {
              console.log(error, "ERROR");
              if (error.response.status == 404) {
                alert("Asteroid Not Found");
              } 
            });
        } catch (error) {
          console.log(error, "ER");
        }
      };
}



