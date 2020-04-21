import React from 'react'
import "./ListItems.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ListItems = (props) => {
    const items = props.items;
    const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                <input class="custom-checkbox" id={item.key} type="checkbox" checked={item.done} onChange={() => (props.handleChange(item.key))}/>
                <label for={item.key}></label>
                <input type="text" id={item.key} value={item.text} onChange={(e) => {
                    props.setUpdate(e.target.value, item.key)
                }} />
                <span>
                    <FontAwesomeIcon className="faicons" onClick={() => {
                        props.deleteItem(item.key)
                    }} icon="trash" />
                </span>
            </p>

        </div>
    })
    return <div>
        {listItems}
    </div>;
}
export default ListItems