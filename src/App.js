// import logo from './logo.svg';
import React, {Component} from 'react';
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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import TodoList from './Components/TodoList';
import HigherComp, { HigherComp2 } from './Components/Hoc';
import DocTitle1 from './Components/DocTitle1';
import DocTitle2 from './Components/DocTitle2';
import CountUseHook1 from './Components/CountUseHook1';
import CountUseHook2 from './Components/CountUseHook2';
import FormUseInput from './Components/FormUseInput';
import { RenderUseState } from './Components/RenderUseState';
import { RenderUseReducer } from './Components/RenderUseReducer';
import { StateImmutable } from './Components/StateImmutable';
import { StateImmutableArray } from './Components/StateImmutableArray';
import { ParentRender } from './Components/ParentRender';
import { ParentRender1 } from './Components/ParentRender1';
import { ChildRender1 } from './Components/ChildRender1';
import { ParentRender2 } from './Components/ParentRender2';
import UseMemoHook from './Components/UseMemoHook';
import { ParentMemo } from './Components/ParentMemo';
import CountHoc from './Components/CountHoc';
import HoverCounter from './Components/HoverCounter';
import CountHoc2 from './Components/CountHoc2';
import HoverCounter2 from './Components/HoverCounter2';
import RenderProps from './Components/RenderProps';
import RenderPropsCounter from './Components/RenderPropsCounter';
import ContextC from './Components/ContextC';
import { UserProvider } from './Components/UserContext';
import MemoPrac from './Components/MemoPrac';
import UseMemoPrac from './Components/UseMemoPrac';
import { ParentContext } from './Components/Context/ParentContext';
import ContextFunc1 from './Components/ContextFunc1';
import { ChildContext } from './Components/Context/ChildContext';
import TimerPro from './Components/Projects.js/TimerPro';
import MessagePro from './Components/Projects.js/MessagePro';
export const UserContext = React.createContext()
export const MyContext = React.createContext()
// const TD = ()=> HigherComp2(TodoList)
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
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<TimerFront/>} />
          <Route path='/timer' exact element={<Timer/>}/>
        </Routes>
      </BrowserRouter> */}
      {/* <TodoList/> */}
      {/* <UseMemoHook/> */}
      {/* <ParentMemo/> */}
      {/* <DocTitle1/>
      <DocTitle2/>  */}
      {/* <CountUseHook1/>
      <CountUseHook2/> */}
      {/* <FormUseInput/> */}
      {/* <TD /> */}
      {/* <RenderUseState/> */}
      {/* <RenderUseReducer/> */}
      {/* <ParentRender1>
        <ChildRender1/>
      </ParentRender1> */}
      {/* <ParentRender2/> */}
      {/* <StateImmutable/> */}
      {/* <StateImmutableArray/> */}
      {/* <ParentRender/> */}
      {/* <HigherComp2><TodoList /></HigherComp2> */}
      {/* <HigherComp><TodoList /></HigherComp> */}
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
      {/* <TimerPro/> */}
      <MessagePro/>
      {/* <TimerFront/> */}
      {/* <TimerRef/> */}
      {/* <CountHoc name='sst'/>
      <HoverCounter/> */}
      {/* <CountHoc2/>
      <HoverCounter2/> */}
      {/* <RenderProps render={(isLoggedIn)=>isLoggedIn ? 'sai' : 'teja'}/> */}
      {/* <RenderPropsCounter>{(count,increment)=> <CountHoc2 count={count} increment={increment}/>}</RenderPropsCounter>
      <RenderPropsCounter>{(count,increment)=> <HoverCounter2 count={count} increment={increment}/>}</RenderPropsCounter> */}
      {/* <UserProvider value='chintu'>
      <ContextC/>
      </UserProvider> */}
      {/* <UserContext.Provider value={'sai teja'}>
        <MyContext.Provider value={'72749'}>
            <ContextFunc1/>
        </MyContext.Provider>
      </UserContext.Provider> */}
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
      {/* <MemoPrac/>
      <UseMemoPrac/> */}
      {/* <ParentContext>
        <ChildContext/>
      </ParentContext> */}
    </div>
  );
}

export default App;

