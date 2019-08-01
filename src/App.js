import React, {Component} from 'react';

import './App.css';

class App extends Component{
    myFunction = () => {
    document.getElementById("display").style.display = "inline-block";
    }
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Quan Ly Cong Viec</h1><hr/>
                </div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        {/*Frorm*/}
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    Them Cong Viec
                                    <span className="fa fa-times-circle text-right">
    
                                    </span>
                                </h3>
                            </div>
                            <div className="panel-body">
                                <form>                               
                                    <div className="form-group">
                                        <label>Ten:</label>
                                        <input type="text" className="form-control" name="name" />
                                    </div> 
                                    <div className="form-group">
                                        <label>Trang Thai:</label>
                                        <input type="text" className="form-control" name="status" />
                                    </div> 
                                    <select name="" id="input" className="form-control">
                                        <option value="">Kich Hoat</option>
                                        <option value="">An</option>
                                   </select> 
                                   <div className="text-center">                          
                                        <button type="submit" className="btn btn-warning mt-15">
                                            <span className="fa fa-plus mr-5"></span>Luu Lai
                                        </button>&nbsp;
                                        <button type="submit" className="btn btn-danger mt-15">
                                            <span className="fa fa-close mr-5"></span>Huy Bo
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <button type="button" className="btn btn-primary">
                        <span className="fa fa-plus mr-5"></span>Them Cong Viec
                        </button>
                    {/* Search - Sort */}
                        <div className="row mt-15">
                            {/* Search*/}
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        name="keyword" 
                                        className="form-control" 
                                        placeholder="Nhap Tu Khoa......"
                                    />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-primary">
                                            <span className="fa fa-search mr-5"></span>Search
                                        </button>
                                    </span>
                                </div>
                            </div>
                            {/* Sort */}
                            <button class="btn btn-danger btn-lg" id="demo" onClick={this.myFunction}><i class="fa fa-spinner fa-spin" id="display"></i> Loading</button>
                        </div>
                    </div>
                </div>



            </div>





        );
    }
}
    

export default App;
