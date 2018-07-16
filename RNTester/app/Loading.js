import React, {
  Component,
} from 'react';
import RootSiblings from 'react-native-root-siblings';
import LoadingView from './LoadingView';

class Loading extends Component {

  static show = (message) => {
    return new RootSiblings(<LoadingView label={message} />);
    // return <LoadingView label={message} />
  };

  static hide = loadingView => {
    if (loadingView instanceof RootSiblings) {
      loadingView.destroy();
    } else {
      console.warn(`View.hide expected a \`RootSiblings\` instance as argument.\nBut got \`${typeof loadingView}\` instead.`);
    }
  };

  // _toast = null;

  // componentWillMount() {
  //   this._toast = new RootSiblings(<LoadingView
  //     {...this.props}
  //   />)
  // };

  // componentWillReceiveProps = nextProps => {
  //   this._toast.update(<ToastContainer
  //     {...nextProps}
  //     duration={0}
  //   />);
  // };

  // componentWillUnmount() {
  //   this._toast.destroy();
  // };

  render() {
    return null
  }
}

// export {
//   RootSiblings as Manager
// };
export default Loading;
