// import logo from './logo.svg';
import './App.css';
import Hello from './Components/Funcprops';
import Bye from './Components/CLassprops';
import Hey from './Components/Hey';
import Message from './Components/Message';
import Count from './Components/Count';
import Sai from './Components/Sai';
import FunctionCLick from './Components/FunctionCLick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import Parent from './Components/Parent';
import Me from './Components/Me';
import ConditionalRend from './Components/ConditionalRend';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import InLine from './Components/InLine';
import './appStyles.css';
import styles from './appStyles.module.css';
import Form from './Components/Form';
import LifeCycleMount from './LifeCycleMount';
import LifeCycleUpdate from './LifeCycleUpdate';
import Fragments from './Components/Fragments';
import Table from './Components/Table';
import ParentComp from './Components/ParentComp';
import SignUp from './Components/SignUp';
import Refs from './Components/Refs';
import Ref2 from './Components/Ref2';
import FocusInput from './Components/FocusInput';
import ForwardRefparent from './Components/ForwardRefparent';
import ForwardingRefs from './Components/ForwardingRefs';
import CountMini from './Components/CountMini';
import ErrorBound from './ErrorBound';
import ErrorBoundary from './Components/ErrorBoundary';
import CountHooks from './Components/CountHooks';
import CounterHook2 from './CounterHook2';
import HookState from './Components/HookState';
import ListHooks from './Components/ListHooks';
import UseEffect from './Components/UseEffect';
import MouseListener, { MouseListenerClass } from './Components/MouseListenerClass';
import MouseListnerUseEffect from './Components/MouseListnerUseEffect';
import CleanUpCode from './Components/CleanUpCode';
import TimerHook from './Components/TimerHook';
import Calculator from './Components/Calculator';
import DataFetchingPosts from './Components/DataFetchingPosts';
import DataFetchingAlbums from './Components/DataFetchingAlbums';
import DataFetchingIndi from './Components/DataFetchingIndi';
import Gmail from './Components/Gmail';
import GetReqClass from './Components/GetReqClass';
import PostReqClass from './Components/PostReqClass';
import Navbar from './Components/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Home } from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Login } from './Components/Login';
import Form1 from './Components/Form1';
import SignUp1 from './Components/SignUp1';
import PrivacyPolicy from './Components/PrivacyPolicy';
import CounterUseRed from './Components/CounterUseRed';
import CounterUseRed2 from './Components/CounterUseRed2';
import CounterMultiRed from './Components/CounterMultiRed';
import DataFetching1 from './Components/DataFetching1';
import DataFetching2 from './Components/DataFetching2';
import CountUseMemo from './Components/CountUseMemo';
import Column from './Components/Column';
import Timer from './Components/Timer';
import TimerRef from './Components/TimerRef';
import TimerFront from './Components/TimerFront';

function App() {
  return (
    <div className="sst" id="we">
      {/* <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/about' exact element={<About/>}/>
          <Route path='/contact/' exact element={<Contact/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/login1' exact element={<Form1/>}/>
          <Route path='/signup1' exact element={<SignUp1/>}/> 
          <Route path='/privacypolicy' exact element={<PrivacyPolicy/>}/>
        </Routes>
      </BrowserRouter>  */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<TimerFront/>} />
          <Route path='/timer' exact element={<Timer/>}/>
        </Routes>
      </BrowserRouter>
      {/* <CountUseMemo/> */}
      {/* <DataFetching1/>
      <DataFetching2/> */}
      {/* <CounterUseRed/>
      <CounterUseRed2/> */}
      {/* <CounterMultiRed/> */}
      {/* <Signup4/> */}
      {/* <Gmail/> */}
      {/* <Form1/>   */}
      {/* <SignUp1/> */}
      {/* <GetReqClass/> */}
      {/* <PostReqClass/> */}
      {/* <DataFetchingIndi/> */}
      {/* <DataFetchingPosts/> */}
      {/* <DataFetchingAlbums/> */}
      {/* <ErrorBoundary>
      <ErrorBound name='dad'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorBound name='parents'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <ErrorBound name='bro'/>
      </ErrorBoundary> */}
      {/* <UseEffect/> */}
      {/* <Calculator/> */}
      {/* <MouseListnerUseEffect/> */}
      {/* <CleanUpCode/> */}
      {/* <TimerHook/> */}
      {/* <Timer/>  */}
      {/* <TimerFront/> */}
      {/* <TimerRef/> */}
      {/* <MouseListenerClass/> */}
      {/* <ListHooks/> */}
      {/* <HookState/> */}
      {/* <CountHooks/> */}
      {/* <CounterHook2/> */}
      {/* <CountMini/> */}
      {/* <ForwardingRefs/> */}
      {/* <ForwardRefparent/> */}
      {/* <Ref2/> */}
      {/* <FocusInput/> */}
      {/* <Refs/> */}
      {/* <ParentComp/> */}
      {/* <LifeCycleUpdate/> */}
      {/* <LifeCycleMount/> */}
      {/* <Table/> */}
      {/* <Fragments/> */}
      {/* <SignUp/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>that's me</h1>
      <h1 className={styles.me}>mahi</h1>
      <StyleSheet primary={true}/> */}
      {/* <InLine/> */}
      {/* <NameList/> */}
      {/* <ConditionalRend/> */}
      {/* <Me/> */}
      {/* <Parent/> */}
      {/* <Sai/><Hello name= 'sai'/>
      <p>children props</p>
      <Hello name= 'teja'/>
      <button>click</button>
      <Hey/>
      <Message/> */}
      {/* <Count/> */}
      {/* <Sai/> */}
      {/* <Project/>
      <Hello name= 'sai teja' myName= 'mahi'/>
      <Bye name='akshay'/>
      <p>children props</p>
      <Bye name='teja'/>
      <button>don't click</button>
      <Bye name='akshay teja' myName='hima'/>
      <FunctionCLick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      {/* <Sai/>
      <ClassClick/>
      <FunctionCLick/> */}
      {/* <Column/> */}
      {/* <CountUseMemo/> */}
    </div>
  );
}

export default App;
   
