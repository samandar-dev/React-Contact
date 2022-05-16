import React, { Component } from 'react';
class Conlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Ali',
          number: 12345678,
          categores: 'Family',
          count: 1,
        },
        {
          id: 2,
          name: 'Husan',
          number: 87654321,
          categores: 'Work',
          count: 1,
        },
        {
          id: 3,
          name: 'Nodir',
          number: 87654321,
          categores: 'Friends',
          count: 1,
        },
        {
          id: 4,
          name: 'Hasan',
          number: 87654321,
          categores: 'Friends',
          count: 1,
        },
        {
          id: 5,
          name: 'Javlon',
          number: 87654321,
          categores: 'Work',
          count: 1,
        },
      ]
    }
  }

  render() {
    return (
      <>
        {/* {this.state.contacts.map((obj, i) => (
          <li className="con__item" key={i}>
            <div className="con__item-box">
              <button className='remove'>x</button>
              <p className="conn-namee">{obj.categores}</p>
              <div className="con__icon">
                <i className="bx bxs-contact" />
              </div>
              <div className="con__names">
                <p className="ite__tit">{obj.name}</p>
                <a className="ite__link" href="tel:123456789">+998 9{obj.number}</a>
              </div>
            </div>
          </li>
        ))} */}
      </>
    );
  }
}

export default Conlist;

