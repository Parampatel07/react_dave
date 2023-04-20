import React, { Component } from "react";
class Bills extends Component {
  componentDidMount(){
    const data = [
      {
        name:"Choklate Penda",
        
      }
    ]
  };
  render() {
    return (
      <div className="main">
        <main className="content">
          <div className="container-fluid">
            <div className="header">
              <h1 className="header-title">Generate Bills</h1>
              {/* <p className="header-subtitle">Your services increased by 4.25% and booking increased by 5.12%.</p> */}
            </div>
            <div className="row">
              <div className="col-8">
                <div className="row">
                  <div className="col-12 col-lg-12 ">
                    <div className="card flex-fill">
                      <div className="card-header">
                        <div className="row ">
                          <div className="col-10">
                            <h2 className="mb-3 ">
                              <span className="mr-5">Choklate Penda </span>
                            </h2>
                          </div>
                          <div className="col-2">
                            <div className="text-end">
                              <button className="btn btn-primary fw-bold">
                                :::
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 col-lg-3 ">
                            <button className=" btn btn-danger p-3 h3 w-100">
                              <strong className="my_button_text ">250Gm</strong>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-3 ">
                            <button className=" btn btn-warning p-3 h3 w-100">
                              <strong className="my_button_text ">500Gm</strong>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-3 ">
                            <button className=" btn btn-info p-3 h3 w-100">
                              <strong className="my_button_text ">750Gm</strong>
                            </button>
                          </div>
                          <div className="col-md-3 col-lg-3 ">
                            <button className=" btn btn-success p-3 h3 w-100">
                              <strong className="my_button_text ">1Kg</strong>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 col-lg-4 col-xl-4 d-flex">
                <div className="card flex-fill w-100">
                  <div className="card-header">
                    <h5 className="card-title mb-0">SERVICE RATIO</h5>
                  </div>
                  <div className="card-body d-flex">
                    <div className="align-self-center w-100">
                      <div className="py-3">
                        <div className="chart chart-xs">
                          <canvas id="chartjs-dashboard-pie" />
                        </div>
                      </div>
                      <table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>
                              <i className="fas fa-circle text-success fa-fw" />
                              Completed
                            </td>
                            <td className="text-end" id="pie_completed" />
                          </tr>
                          <tr>
                            <td>
                              <i className="fas fa-circle text-warning fa-fw" />
                              Requested
                            </td>
                            <td className="text-end" id="pie_requested" />
                          </tr>
                          <tr>
                            <td>
                              <i className="fas fa-circle text-primary fa-fw" />
                              Accepted
                            </td>
                            <td className="text-end" id="pie_accepted" />
                          </tr>
                          <tr>
                            <td>
                              <i className="fas fa-circle text-danger fa-fw" />
                              Rejected
                            </td>
                            <td className="text-end" id="pie_rejected" />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
export default Bills;
