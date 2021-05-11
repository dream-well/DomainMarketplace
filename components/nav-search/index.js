import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "_actions";
import Router from 'next/router'
import {MDBBtn, MDBIcon} from 'mdbreact'
import styles from './index.module.scss';
import classnames from 'classnames'

const SearchBox = (props) => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [focus, setFocus] = useState(false)
  return (
    <div className={classnames(`index-search items-center rounded-lg flex relative pl-3 overflow-hidden`, (props.inNav ? "nav-search" : ""),styles.search, (focus?"flex-grow "+styles.focus:"")) }>
      <MDBIcon icon="search" className={styles.search_icon}/>
      <input type="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        className={classnames("pl-3 pr-4 focus:outline-none ", styles.search_input, (focus?"flex-grow":""))} name="" placeholder="Search Domains" />
    </div>
  );
}

export default SearchBox;