import React from 'react'
import {
  TouchableOpacity,
  Image,
  Text,
  View,
  Platform
} from 'react-native'

import {
  Header,
  createBottomTabNavigator
} from 'react-navigation'
import inspectionReport from '../../app/screens/inspectionReport'
import {EmrRecordDetail} from '../../app/screens/healthManagerPage/subPage/'
import adviceDetail from '../screens/healthManagerPage/subPage/doctorAdvice/DoctorAdviceDetail'
import healthEducation from '../../app/screens/healthEducation'
import commonDetailList from '../../app/screens/common/detailList'

import tabStack from "./mainTabNavigator"
import NavigationHead from './NavigationHead'
import {Device} from "../utils"
import ImageManager from "../images"

import SingleEditPage from "../screens/singleEditPage"
import HealthMonitoringPage from "../screens/homePage/healthMonitoring"
import SettingPage from "../screens/setting"
import MyApplicationPage from "../screens/homePage/myApplication"
import ApplyDetailPage from "../screens/homePage/myApplication/applyDetailPage"
import ApplyPage from "../screens/homePage/myApplication/applyPage"
import {Weekly, Yearly, Monthly} from '../screens/report'
import ReportDetail from '../screens/report/DetailScreen'
import HotOrgListPage from '../screens/homePage/hotOrg'
import HotOrgDetailPage from '../screens/homePage/hotOrg/HotOrgDetailPage'
import MapViewPage from '../screens/homePage/hotOrg/MapViewPage'
import PersonalInfo from '../screens/personalInfo'
import GuardianInfo from '../screens/guardianInfo'

import LoginPage from '../screens/login'
import MessageList from '../screens/msgPage/messageList'
import GesturePasswordPage from '../../app/screens/gesturePasswordPage'
import ResetGesturePage from '../../app/screens/gesturePasswordPage/reset'

export const TabStack = createBottomTabNavigator(tabStack.screens, tabStack.config)

export const screens = {
  inspectionReport: { screen: inspectionReport },
  emrRecordDetail: {
    screen: EmrRecordDetail,
    navigationOptions: {
      title: 'EMR电子病历'
    }
  },
  adviceDetail: {screen: adviceDetail},
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      header: props => <Header {...props} />,
      headerStyle: {
        backgroundColor: 'white',
        elevation: 0,
        shadowOpacity: 0
      }
    }
  },
  healthEducation: {
    screen: healthEducation,
    navigationOptions: {
      title: '健康教育'
    }
  },
  commonDetailList: {
    screen: commonDetailList,
  },
  Home: {
    screen: TabStack,
    navigationOptions: {
      header: null
    },
  },
  ApplyPage: {
    screen: ApplyPage
  },
  ApplyDetailPage: {
    screen: ApplyDetailPage
  },
  SingleEditPage: {
    screen: SingleEditPage
  },
  HealthMonitoring: {
    screen: HealthMonitoringPage,
    navigationOptions: {
      title: '健康监测'
    }
  },
  Setting: {
    screen: SettingPage,
    navigationOptions: {
      title: '设置'
    }
  },
  MyApplication: {
    screen: MyApplicationPage,
    navigationOptions: {
      title: '我的申请'
    }
  },
  HotOrgList: {
    screen: HotOrgListPage,
    navigationOptions: {
      title: '热门机构'
    }
  },
  MapViewPage: {
    screen: MapViewPage,
    navigationOptions: {
      title: '机构地址'
    }
  },
  HotOrgDetail: {
    screen: HotOrgDetailPage,
    navigationOptions: {
      title: '机构详情'
    }
  },
  Weekly: { screen: Weekly },
  Monthly: { screen: Monthly },
  Yearly: { screen: Yearly },
  ReportDetail: { screen: ReportDetail },
  PersonalInfo: { screen: PersonalInfo, navigationOptions: { title: '个人信息' } },
  GuardianInfo: { screen: GuardianInfo, navigationOptions: { title: '我的监护人' } },
  MessageList: { screen: MessageList },
  GesturePasswordPage: {
    screen: GesturePasswordPage,
    navigationOptions: {},
  },
  ResetGesturePage: {
    screen: ResetGesturePage,
    navigationOptions: {
      title: '重置手势密码',
      headerBackTitle: '取消',
    },
  }
}

const config = {
  initialRouteName: 'Home',
  navigationOptions: ({navigation}) => {
    return {
      header: props => <NavigationHead {...props} />,
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
        shadowOpacity: 0,
        marginTop: Platform.OS === 'android' ? Device.statusBarHeight : 0,
        height: Device.navBarHeight - Device.statusBarHeight
      },
      headerBackTitle: null,
      headerLeft: (<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => {
          navigation.goBack()
        }}>
          <Image source={ImageManager.nav.icon_back} style={{marginLeft: 10}}/>
          <Text style={{fontSize: Device.scale(16), color: '#595550', marginLeft: Device.scale(6)}}>返回</Text>
        </TouchableOpacity>
      ),
      headerRight: Platform.OS === 'android' ? <View/> : null,
      headerTitleStyle: {
        flex: 1,
        textAlign: 'center',
        alignSelf: 'center',
        color: '#595550',
        fontSize: Device.scale(17)
      }
    }
  }
}

export default {
  screens,
  config,
}
