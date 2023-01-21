import $a6H0q$react, {Component as $a6H0q$Component} from "react";
import $a6H0q$proptypes from "prop-types";

/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 13/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********     IMPORTS     ******** */ /* ************************************* */ 

/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 20/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 

/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 18/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 

/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 19/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /**
 * Get Object type.
 * @param obj {*} object to get type
 * @returns {*}
 */ function $23a5fe9e979d80ca$export$11cc42aebef2ef3a(obj) {
    if (obj !== null && typeof obj === "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] === "function") return "Iterable";
    return Object.prototype.toString.call(obj).slice(8, -1);
}
/**
 * Is Component will change ?
 * @param oldValue {*} old value
 * @param newValue {*} new value
 * @returns {boolean} result
 */ function $23a5fe9e979d80ca$export$1172a3730e5c4525(oldValue, newValue) {
    const oldType = $23a5fe9e979d80ca$export$11cc42aebef2ef3a(oldValue);
    const newType = $23a5fe9e979d80ca$export$11cc42aebef2ef3a(newValue);
    return (oldType === "Function" || newType === "Function") && newType !== oldType;
}


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 27/02/18
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $9d11e61eaae386e6$var$VALUE = "value";
const $9d11e61eaae386e6$var$KEY = "key";
var /* ************************************* */ /* ********       CLASSES       ******** */ /* ************************************* */ /* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $9d11e61eaae386e6$export$2e2bcd8739ae039 = {
    KEY: $9d11e61eaae386e6$var$KEY,
    VALUE: $9d11e61eaae386e6$var$VALUE
};


/**
 * Handle key events with handlers
 * @param {{[keyName: string]: () => void}} hotkeys an object with keyboard key
 *   names and associated handlers to call for those keys
 * @returns {(keyEvent: KeyboardEvent) => void} an event handler to handle key
 *   events for the given hotkeys
 */ const $d55c30c34fe7164f$export$6a361f9cf16d448e = (hotkeys)=>(keyEvent)=>{
        if (Object.hasOwn(hotkeys, keyEvent.key)) hotkeys[keyEvent.key]();
    };


/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $5bdc19770f09e5f2$var$propTypes = {
    name: (0, $a6H0q$proptypes).string.isRequired,
    value: (0, $a6H0q$proptypes).any.isRequired,
    originalValue: (0, $a6H0q$proptypes).any,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    handleRemove: (0, $a6H0q$proptypes).func,
    handleUpdateValue: (0, $a6H0q$proptypes).func,
    readOnly: (0, $a6H0q$proptypes).func.isRequired,
    dataType: (0, $a6H0q$proptypes).string,
    getStyle: (0, $a6H0q$proptypes).func.isRequired,
    editButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    inputElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    minusMenuElement: (0, $a6H0q$proptypes).element,
    logger: (0, $a6H0q$proptypes).object.isRequired,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $5bdc19770f09e5f2$var$defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: ()=>Promise.resolve(),
    editButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "Apply"),
    cancelButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "Cancel"),
    minusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " - ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $5bdc19770f09e5f2$var$JsonValue extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }
    componentDidUpdate() {
        const { editEnabled: editEnabled , inputRef: inputRef , name: name , value: value , keyPath: keyPath , deep: deep  } = this.state;
        const { readOnly: readOnly , dataType: dataType  } = this.props;
        const readOnlyResult = readOnly(name, value, keyPath, deep, dataType);
        if (editEnabled && !readOnlyResult && typeof inputRef.focus === "function") inputRef.focus();
    }
    handleEdit() {
        const { handleUpdateValue: handleUpdateValue , originalValue: originalValue , logger: logger , onSubmitValueParser: onSubmitValueParser , keyPath: keyPath  } = this.props;
        const { inputRef: inputRef , name: name , deep: deep  } = this.state;
        const newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
        const result = {
            value: newValue,
            key: name
        };
        // Run update
        handleUpdateValue(result).then(()=>{
            // Cancel edit mode if necessary
            if (!(0, $23a5fe9e979d80ca$export$1172a3730e5c4525)(originalValue, newValue)) this.handleCancelEdit();
        }).catch(logger.error);
    }
    handleEditMode() {
        this.setState({
            editEnabled: true
        });
    }
    refInput(node) {
        this.state.inputRef = node;
    }
    handleCancelEdit() {
        this.setState({
            editEnabled: false
        });
    }
    render() {
        const { name: name , value: value , editEnabled: editEnabled , keyPath: keyPath , deep: deep  } = this.state;
        const { handleRemove: handleRemove , originalValue: originalValue , readOnly: readOnly , dataType: dataType , getStyle: getStyle , editButtonElement: editButtonElement , cancelButtonElement: cancelButtonElement , inputElementGenerator: inputElementGenerator , minusMenuElement: minusMenuElement , keyPath: comeFromKeyPath  } = this.props;
        const hotkeys = {
            Escape: this.handleCancelEdit,
            Enter: this.handleEdit
        };
        const style = getStyle(name, originalValue, keyPath, deep, dataType);
        let result = null;
        let minusElement = null;
        const readOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
        if (editEnabled && !readOnlyResult) {
            const inputElement = inputElementGenerator((0, $9d11e61eaae386e6$export$2e2bcd8739ae039).VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
            const editButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(editButtonElement, {
                onClick: this.handleEdit
            });
            const cancelButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(cancelButtonElement, {
                onClick: this.handleCancelEdit
            });
            const inputElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(inputElement, {
                ref: this.refInput,
                defaultValue: originalValue,
                onKeyUp: (0, $d55c30c34fe7164f$export$6a361f9cf16d448e)(hotkeys)
            });
            result = /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
                className: "rejt-edit-form",
                style: style.editForm
            }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout);
            minusElement = null;
        } else {
            /* eslint-disable jsx-a11y/no-static-element-interactions */ result = /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
                className: "rejt-value",
                style: style.value,
                onClick: readOnlyResult ? null : this.handleEditMode
            }, value);
            /* eslint-enable */ const minusMenuLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(minusMenuElement, {
                onClick: handleRemove,
                className: "rejt-minus-menu",
                style: style.minus
            });
            minusElement = readOnlyResult ? null : minusMenuLayout;
        }
        return null;
    // return (
    //     <li className="rejt-value-node" style={style.li}>
    //         <span className="rejt-name" style={style.name}>{name}: </span>{result}
    //     </li>
    // );
    }
    constructor(props){
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name
        ];
        this.state = {
            value: props.value,
            name: props.name,
            keyPath: keyPath,
            deep: props.deep,
            editEnabled: false,
            inputRef: null
        };
        // Bind
        this.handleEditMode = this.handleEditMode.bind(this);
        this.refInput = this.refInput.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
}
// Add prop types
$5bdc19770f09e5f2$var$JsonValue.propTypes = $5bdc19770f09e5f2$var$propTypes;
// Add default props
$5bdc19770f09e5f2$var$JsonValue.defaultProps = $5bdc19770f09e5f2$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $5bdc19770f09e5f2$export$2e2bcd8739ae039 = $5bdc19770f09e5f2$var$JsonValue;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 18/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 22/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 



/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $2bab15d14095d489$var$propTypes = {
    handleAdd: (0, $a6H0q$proptypes).func.isRequired,
    handleCancel: (0, $a6H0q$proptypes).func.isRequired,
    onlyValue: (0, $a6H0q$proptypes).bool,
    addButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    inputElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $2bab15d14095d489$var$defaultProps = {
    onlyValue: false,
    addButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "+"),
    cancelButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "c")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $2bab15d14095d489$var$JsonAddValue extends (0, $a6H0q$Component) {
    componentDidMount() {
        const { inputRefKey: inputRefKey , inputRefValue: inputRefValue  } = this.state;
        const { onlyValue: onlyValue  } = this.props;
        if (inputRefKey && typeof inputRefKey.focus === "function") inputRefKey.focus();
        if (onlyValue && inputRefValue && typeof inputRefValue.focus === "function") inputRefValue.focus();
    }
    onSubmit() {
        const { handleAdd: handleAdd , onlyValue: onlyValue , onSubmitValueParser: onSubmitValueParser , keyPath: keyPath , deep: deep  } = this.props;
        const { inputRefKey: inputRefKey , inputRefValue: inputRefValue  } = this.state;
        const result = {};
        // Check if we have the key
        if (!onlyValue) {
            // Check that there is a key
            if (!inputRefKey.value) // Empty key => Not authorized
            return;
            result.key = inputRefKey.value;
        }
        result.newValue = onSubmitValueParser(false, keyPath, deep, result.key, inputRefValue.value);
        handleAdd(result);
    }
    refInputKey(node) {
        this.state.inputRefKey = node;
    }
    refInputValue(node) {
        this.state.inputRefValue = node;
    }
    render() {
        const { handleCancel: handleCancel , onlyValue: onlyValue , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , inputElementGenerator: inputElementGenerator , keyPath: keyPath , deep: deep  } = this.props;
        const hotkeys = {
            Escape: handleCancel,
            Enter: this.onSubmit
        };
        const addButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(addButtonElement, {
            onClick: this.onSubmit
        });
        const cancelButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(cancelButtonElement, {
            onClick: handleCancel
        });
        const inputElementValue = inputElementGenerator((0, $9d11e61eaae386e6$export$2e2bcd8739ae039).VALUE, keyPath, deep);
        const inputElementValueLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(inputElementValue, {
            placeholder: "Value",
            ref: this.refInputValue,
            onKeyUp: (0, $d55c30c34fe7164f$export$6a361f9cf16d448e)(hotkeys)
        });
        let inputElementKeyLayout = null;
        let separatorElement = null;
        if (!onlyValue) {
            const inputElementKey = inputElementGenerator((0, $9d11e61eaae386e6$export$2e2bcd8739ae039).KEY, keyPath, deep);
            inputElementKeyLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(inputElementKey, {
                placeholder: "Key",
                ref: this.refInputKey,
                onKeyUp: (0, $d55c30c34fe7164f$export$6a361f9cf16d448e)(hotkeys)
            });
            separatorElement = ":";
        }
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-add-value-node"
        }, inputElementKeyLayout, " ", separatorElement, " ", inputElementValueLayout, " ", cancelButtonElementLayout, addButtonElementLayout);
    }
    constructor(props){
        super(props);
        this.state = {
            inputRefKey: null,
            inputRefValue: null
        };
        // Bind
        this.refInputValue = this.refInputValue.bind(this);
        this.refInputKey = this.refInputKey.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
}
// Add prop types
$2bab15d14095d489$var$JsonAddValue.propTypes = $2bab15d14095d489$var$propTypes;
// Add default props
$2bab15d14095d489$var$JsonAddValue.defaultProps = $2bab15d14095d489$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $2bab15d14095d489$export$2e2bcd8739ae039 = $2bab15d14095d489$var$JsonAddValue;



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 23/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $81a31a9bc7e2feaa$export$58df28f56f04475d = "ADD_DELTA_TYPE";
const $81a31a9bc7e2feaa$export$eb8fc0985296a20 = "REMOVE_DELTA_TYPE";
const $81a31a9bc7e2feaa$export$f84f3b228725d3db = "UPDATE_DELTA_TYPE";


/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $96531d4eb44d63bb$var$propTypes = {
    data: (0, $a6H0q$proptypes).object.isRequired,
    name: (0, $a6H0q$proptypes).string.isRequired,
    isCollapsed: (0, $a6H0q$proptypes).func.isRequired,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    handleRemove: (0, $a6H0q$proptypes).func,
    onUpdate: (0, $a6H0q$proptypes).func.isRequired,
    onDeltaUpdate: (0, $a6H0q$proptypes).func.isRequired,
    readOnly: (0, $a6H0q$proptypes).func.isRequired,
    dataType: (0, $a6H0q$proptypes).string,
    getStyle: (0, $a6H0q$proptypes).func.isRequired,
    addButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    editButtonElement: (0, $a6H0q$proptypes).element,
    inputElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    textareaElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    minusMenuElement: (0, $a6H0q$proptypes).element,
    plusMenuElement: (0, $a6H0q$proptypes).element,
    beforeRemoveAction: (0, $a6H0q$proptypes).func,
    beforeAddAction: (0, $a6H0q$proptypes).func,
    beforeUpdateAction: (0, $a6H0q$proptypes).func,
    logger: (0, $a6H0q$proptypes).object.isRequired,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $96531d4eb44d63bb$var$defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " - "),
    plusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " + ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $96531d4eb44d63bb$var$JsonObject extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        });
    }
    onChildUpdate(childKey, childData) {
        const { data: data , keyPath: keyPath  } = this.state;
        // Update data
        data[childKey] = childData;
        // Put new data
        this.setState({
            data: data
        });
        // Spread
        const { onUpdate: onUpdate  } = this.props;
        const size = keyPath.length;
        onUpdate(keyPath[size - 1], data);
    }
    handleAddMode() {
        this.setState({
            addFormVisible: true
        });
    }
    handleAddValueCancel() {
        this.setState({
            addFormVisible: false
        });
    }
    handleAddValueAdd({ key: key , newValue: newValue  }) {
        const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
        const { beforeAddAction: beforeAddAction , logger: logger  } = this.props;
        beforeAddAction(key, keyPath, deep, newValue).then(()=>{
            // Update data
            data[key] = newValue;
            this.setState({
                data: data
            });
            // Cancel add to close
            this.handleAddValueCancel();
            // Spread new update
            const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
            onUpdate(keyPath[keyPath.length - 1], data);
            // Spread delta update
            onDeltaUpdate({
                type: (0, $81a31a9bc7e2feaa$export$58df28f56f04475d),
                keyPath: keyPath,
                deep: deep,
                key: key,
                newValue: newValue
            });
        }).catch(logger.error);
    }
    handleRemoveValue(key) {
        return ()=>{
            const { beforeRemoveAction: beforeRemoveAction , logger: logger  } = this.props;
            const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
            const oldValue = data[key];
            // Before Remove Action
            beforeRemoveAction(key, keyPath, deep, oldValue).then(()=>{
                const objType = (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(oldValue);
                const deltaUpdateResult = {
                    keyPath: keyPath,
                    deep: deep,
                    key: key,
                    oldValue: oldValue
                };
                if (objType === "Object" || objType === "Array") {
                    deltaUpdateResult.type = (0, $81a31a9bc7e2feaa$export$f84f3b228725d3db);
                    deltaUpdateResult.newValue = null;
                    data[key] = null;
                } else {
                    deltaUpdateResult.type = (0, $81a31a9bc7e2feaa$export$eb8fc0985296a20);
                    delete data[key];
                }
                this.setState({
                    data: data
                });
                // Spread new update
                const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
                onUpdate(keyPath[keyPath.length - 1], data);
                // Spread delta update
                onDeltaUpdate(deltaUpdateResult);
            }).catch(logger.error);
        };
    }
    handleCollapseMode() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    handleEditValue({ key: key , value: value  }) {
        return new Promise((resolve, reject)=>{
            const { beforeUpdateAction: beforeUpdateAction  } = this.props;
            const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
            // Old value
            const oldValue = data[key];
            // Before update action
            beforeUpdateAction(key, keyPath, deep, oldValue, value).then(()=>{
                // Update value
                data[key] = value;
                // Set state
                this.setState({
                    data: data
                });
                // Spread new update
                const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
                onUpdate(keyPath[keyPath.length - 1], data);
                // Spread delta update
                onDeltaUpdate({
                    type: (0, $81a31a9bc7e2feaa$export$f84f3b228725d3db),
                    keyPath: keyPath,
                    deep: deep,
                    key: key,
                    newValue: value,
                    oldValue: oldValue
                });
                // Resolve
                resolve();
            }).catch(reject);
        });
    }
    renderCollapsed() {
        const { name: name , keyPath: keyPath , deep: deep , data: data  } = this.state;
        const { handleRemove: handleRemove , readOnly: readOnly , dataType: dataType , getStyle: getStyle , minusMenuElement: minusMenuElement  } = this.props;
        const { minus: minus , collapsed: collapsed  } = getStyle(name, data, keyPath, deep, dataType);
        const keyList = Object.getOwnPropertyNames(data);
        const collapseValue = " {...}";
        const numberOfItems = keyList.length;
        const itemName = numberOfItems > 1 ? "keys" : "key";
        const minusElement = null;
        readOnly(name, data, keyPath, deep, dataType);
        /* eslint-disable jsx-a11y/no-static-element-interactions */ return /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-collapsed"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-collapsed-text",
            style: collapsed,
            onClick: this.handleCollapseMode
        }, collapseValue, " ", numberOfItems, " ", itemName));
    /* eslint-enable */ }
    renderNotCollapsed() {
        const { name: name , data: data , keyPath: keyPath , deep: deep , nextDeep: nextDeep , addFormVisible: addFormVisible  } = this.state;
        const { isCollapsed: isCollapsed , handleRemove: handleRemove , onDeltaUpdate: onDeltaUpdate , readOnly: readOnly , getStyle: getStyle , dataType: dataType , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , editButtonElement: editButtonElement , inputElementGenerator: inputElementGenerator , textareaElementGenerator: textareaElementGenerator , minusMenuElement: minusMenuElement , plusMenuElement: plusMenuElement , beforeRemoveAction: beforeRemoveAction , beforeAddAction: beforeAddAction , beforeUpdateAction: beforeUpdateAction , logger: logger , onSubmitValueParser: onSubmitValueParser  } = this.props;
        const { minus: minus , plus: plus , addForm: addForm , ul: ul , delimiter: delimiter  } = getStyle(name, data, keyPath, deep, dataType);
        const keyList = Object.getOwnPropertyNames(data);
        let minusElement = null;
        const readOnlyResult = readOnly(name, data, keyPath, deep, dataType);
        // Check if readOnly is activated
        if (!readOnlyResult) {
            const minusMenuLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(minusMenuElement, {
                onClick: handleRemove,
                className: "rejt-minus-menu",
                style: minus
            });
            minusElement = deep !== -1 ? minusMenuLayout : null;
        }
        const list = keyList.map((key)=>/*#__PURE__*/ (0, $a6H0q$react).createElement((0, $8eee1650ad9f7cc4$export$2e2bcd8739ae039), {
                key: key,
                name: key,
                data: data[key],
                keyPath: keyPath,
                deep: nextDeep,
                isCollapsed: isCollapsed,
                handleRemove: this.handleRemoveValue(key),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: onDeltaUpdate,
                readOnly: readOnly,
                getStyle: getStyle,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                editButtonElement: editButtonElement,
                inputElementGenerator: inputElementGenerator,
                textareaElementGenerator: textareaElementGenerator,
                minusMenuElement: minusMenuElement,
                plusMenuElement: plusMenuElement,
                beforeRemoveAction: beforeRemoveAction,
                beforeAddAction: beforeAddAction,
                beforeUpdateAction: beforeUpdateAction,
                logger: logger,
                onSubmitValueParser: onSubmitValueParser
            }));
        const startObject = "{";
        const endObject = "}";
        let menu = null;
        // Check if readOnly is activated
        if (!readOnlyResult) {
            const plusMenuLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(plusMenuElement, {
                onClick: this.handleAddMode,
                className: "rejt-plus-menu",
                style: plus
            });
            menu = addFormVisible ? /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
                className: "rejt-add-form",
                style: addForm
            }, /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $2bab15d14095d489$export$2e2bcd8739ae039), {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                inputElementGenerator: inputElementGenerator,
                keyPath: keyPath,
                deep: deep,
                onSubmitValueParser: onSubmitValueParser
            })) : /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " ");
        }
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, startObject), /*#__PURE__*/ (0, $a6H0q$react).createElement("ul", {
            className: "rejt-not-collapsed-list",
            style: ul
        }, list), /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, endObject), menu);
    }
    render() {
        const { name: name , collapsed: collapsed , data: data , keyPath: keyPath , deep: deep  } = this.state;
        const { getStyle: getStyle , dataType: dataType  } = this.props;
        const value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
        const style = getStyle(name, data, keyPath, deep, dataType);
        /* eslint-disable jsx-a11y/no-static-element-interactions */ if (keyPath.includes("startPosition") || keyPath.includes("editionPosition") || keyPath.includes("editionColor") || keyPath.includes("variableTest") || keyPath.includes("damageAffinities") || keyPath.includes("position") || keyPath.includes("localPosition") || keyPath.includes("customDimensions")) return null;
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("div", {
            className: "rejt-object-node"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            onClick: this.handleCollapseMode
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-name",
            style: style.name
        }, name, " ", ":", " ")), value);
    /* eslint-enable */ }
    constructor(props){
        super(props);
        const keyPath = props.deep === -1 ? [] : [
            ...props.keyPath,
            props.name
        ];
        this.state = {
            name: props.name,
            data: props.data,
            keyPath: keyPath,
            deep: props.deep,
            nextDeep: props.deep + 1,
            collapsed: props.isCollapsed(keyPath, props.deep, props.data),
            addFormVisible: false
        };
        // Bind
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
        this.handleRemoveValue = this.handleRemoveValue.bind(this);
        this.handleAddMode = this.handleAddMode.bind(this);
        this.handleAddValueAdd = this.handleAddValueAdd.bind(this);
        this.handleAddValueCancel = this.handleAddValueCancel.bind(this);
        this.handleEditValue = this.handleEditValue.bind(this);
        this.onChildUpdate = this.onChildUpdate.bind(this);
        this.renderCollapsed = this.renderCollapsed.bind(this);
        this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
    }
}
// Add prop types
$96531d4eb44d63bb$var$JsonObject.propTypes = $96531d4eb44d63bb$var$propTypes;
// Add default props
$96531d4eb44d63bb$var$JsonObject.defaultProps = $96531d4eb44d63bb$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $96531d4eb44d63bb$export$2e2bcd8739ae039 = $96531d4eb44d63bb$var$JsonObject;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 20/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 





/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $d75ab2710d4a52f0$var$propTypes = {
    data: (0, $a6H0q$proptypes).array.isRequired,
    name: (0, $a6H0q$proptypes).string.isRequired,
    isCollapsed: (0, $a6H0q$proptypes).func.isRequired,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    handleRemove: (0, $a6H0q$proptypes).func,
    onUpdate: (0, $a6H0q$proptypes).func.isRequired,
    onDeltaUpdate: (0, $a6H0q$proptypes).func.isRequired,
    readOnly: (0, $a6H0q$proptypes).func.isRequired,
    dataType: (0, $a6H0q$proptypes).string,
    getStyle: (0, $a6H0q$proptypes).func.isRequired,
    addButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    editButtonElement: (0, $a6H0q$proptypes).element,
    inputElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    textareaElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    minusMenuElement: (0, $a6H0q$proptypes).element,
    plusMenuElement: (0, $a6H0q$proptypes).element,
    beforeRemoveAction: (0, $a6H0q$proptypes).func,
    beforeAddAction: (0, $a6H0q$proptypes).func,
    beforeUpdateAction: (0, $a6H0q$proptypes).func,
    logger: (0, $a6H0q$proptypes).object.isRequired,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $d75ab2710d4a52f0$var$defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " - "),
    plusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " + ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $d75ab2710d4a52f0$var$JsonArray extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        });
    }
    onChildUpdate(childKey, childData) {
        const { data: data , keyPath: keyPath  } = this.state;
        // Update data
        data[childKey] = childData;
        // Put new data
        this.setState({
            data: data
        });
        // Spread
        const { onUpdate: onUpdate  } = this.props;
        const size = keyPath.length;
        onUpdate(keyPath[size - 1], data);
    }
    handleAddMode() {
        this.setState({
            addFormVisible: true
        });
    }
    handleCollapseMode() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    handleRemoveItem(index) {
        return ()=>{
            const { beforeRemoveAction: beforeRemoveAction , logger: logger  } = this.props;
            const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
            const oldValue = data[index];
            // Before Remove Action
            beforeRemoveAction(index, keyPath, deep, oldValue).then(()=>{
                const objType = (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(data[index]);
                const deltaUpdateResult = {
                    keyPath: keyPath,
                    deep: deep,
                    key: index,
                    oldValue: oldValue
                };
                if (objType === "Object" || objType === "Array") {
                    deltaUpdateResult.type = (0, $81a31a9bc7e2feaa$export$f84f3b228725d3db);
                    deltaUpdateResult.newValue = null;
                    data[index] = null;
                } else {
                    deltaUpdateResult.type = (0, $81a31a9bc7e2feaa$export$eb8fc0985296a20);
                    data.splice(index, 1);
                }
                this.setState({
                    data: data
                });
                // Spread new update
                const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
                onUpdate(keyPath[keyPath.length - 1], data);
                // Spread delta update
                onDeltaUpdate(deltaUpdateResult);
            }).catch(logger.error);
        };
    }
    handleAddValueAdd({ newValue: newValue  }) {
        const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
        const { beforeAddAction: beforeAddAction , logger: logger  } = this.props;
        beforeAddAction(data.length, keyPath, deep, newValue).then(()=>{
            // Update data
            const newData = [
                ...data,
                newValue
            ];
            this.setState({
                data: newData
            });
            // Cancel add to close
            this.handleAddValueCancel();
            // Spread new update
            const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
            onUpdate(keyPath[keyPath.length - 1], newData);
            // Spread delta update
            onDeltaUpdate({
                type: (0, $81a31a9bc7e2feaa$export$58df28f56f04475d),
                keyPath: keyPath,
                deep: deep,
                key: newData.length - 1,
                newValue: newValue
            });
        }).catch(logger.error);
    }
    handleAddValueCancel() {
        this.setState({
            addFormVisible: false
        });
    }
    handleEditValue({ key: key , value: value  }) {
        return new Promise((resolve, reject)=>{
            const { beforeUpdateAction: beforeUpdateAction  } = this.props;
            const { data: data , keyPath: keyPath , nextDeep: deep  } = this.state;
            // Old value
            const oldValue = data[key];
            // Before update action
            beforeUpdateAction(key, keyPath, deep, oldValue, value).then(()=>{
                // Update value
                data[key] = value;
                // Set state
                this.setState({
                    data: data
                });
                // Spread new update
                const { onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate  } = this.props;
                onUpdate(keyPath[keyPath.length - 1], data);
                // Spread delta update
                onDeltaUpdate({
                    type: (0, $81a31a9bc7e2feaa$export$f84f3b228725d3db),
                    keyPath: keyPath,
                    deep: deep,
                    key: key,
                    newValue: value,
                    oldValue: oldValue
                });
                // Resolve
                resolve();
            }).catch(reject);
        });
    }
    renderCollapsed() {
        const { name: name , data: data , keyPath: keyPath , deep: deep  } = this.state;
        const { getStyle: getStyle , dataType: dataType  } = this.props;
        const { collapsed: collapsed  } = getStyle(name, data, keyPath, deep, dataType);
        const collapseValue = " [...]";
        const numberOfItems = data.length;
        const itemName = numberOfItems > 1 ? "items" : "item";
        /* eslint-disable jsx-a11y/no-static-element-interactions */ return /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-collapsed"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-collapsed-text",
            style: collapsed,
            onClick: this.handleCollapseMode
        }, collapseValue, " ", numberOfItems, " ", itemName));
    /* eslint-enable */ }
    renderNotCollapsed() {
        const { name: name , data: data , keyPath: keyPath , deep: deep , addFormVisible: addFormVisible , nextDeep: nextDeep  } = this.state;
        const { isCollapsed: isCollapsed , handleRemove: handleRemove , onDeltaUpdate: onDeltaUpdate , readOnly: readOnly , getStyle: getStyle , dataType: dataType , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , editButtonElement: editButtonElement , inputElementGenerator: inputElementGenerator , textareaElementGenerator: textareaElementGenerator , minusMenuElement: minusMenuElement , plusMenuElement: plusMenuElement , beforeRemoveAction: beforeRemoveAction , beforeAddAction: beforeAddAction , beforeUpdateAction: beforeUpdateAction , logger: logger , onSubmitValueParser: onSubmitValueParser  } = this.props;
        const { minus: minus , plus: plus , delimiter: delimiter , ul: ul , addForm: addForm  } = getStyle(name, data, keyPath, deep, dataType);
        let minusElement = null;
        const readOnlyResult = readOnly(name, data, keyPath, deep, dataType);
        // Check if readOnly is activated
        if (!readOnlyResult) {
            const minusMenuLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(minusMenuElement, {
                onClick: handleRemove,
                className: "rejt-minus-menu",
                style: minus
            });
            minusElement = deep !== -1 ? minusMenuLayout : null;
        }
        const list = data.map((item, index)=>/*#__PURE__*/ (0, $a6H0q$react).createElement((0, $8eee1650ad9f7cc4$export$2e2bcd8739ae039), {
                key: keyPath.join("_"),
                name: `${index}`,
                data: item,
                keyPath: keyPath,
                deep: nextDeep,
                isCollapsed: isCollapsed,
                handleRemove: this.handleRemoveItem(index),
                handleUpdateValue: this.handleEditValue,
                onUpdate: this.onChildUpdate,
                onDeltaUpdate: onDeltaUpdate,
                readOnly: readOnly,
                getStyle: getStyle,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                editButtonElement: editButtonElement,
                inputElementGenerator: inputElementGenerator,
                textareaElementGenerator: textareaElementGenerator,
                minusMenuElement: minusMenuElement,
                plusMenuElement: plusMenuElement,
                beforeRemoveAction: beforeRemoveAction,
                beforeAddAction: beforeAddAction,
                beforeUpdateAction: beforeUpdateAction,
                logger: logger,
                onSubmitValueParser: onSubmitValueParser
            }));
        const onlyValue = true;
        let menu = null;
        // Check if readOnly is activated
        if (!readOnlyResult) {
            const plusMenuLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(plusMenuElement, {
                onClick: this.handleAddMode,
                className: "rejt-plus-menu",
                style: plus
            });
            menu = addFormVisible ? /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
                className: "rejt-add-form",
                style: addForm
            }, /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $2bab15d14095d489$export$2e2bcd8739ae039), {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: onlyValue,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                inputElementGenerator: inputElementGenerator,
                keyPath: keyPath,
                deep: deep,
                onSubmitValueParser: onSubmitValueParser
            })) : /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " ");
        }
        const startObject = "[";
        const endObject = "]";
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, startObject), /*#__PURE__*/ (0, $a6H0q$react).createElement("ul", {
            className: "rejt-not-collapsed-list",
            style: ul
        }, list), /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, endObject), menu);
    }
    render() {
        const { name: name , collapsed: collapsed , data: data , keyPath: keyPath , deep: deep  } = this.state;
        const { dataType: dataType , getStyle: getStyle  } = this.props;
        const value = collapsed ? this.renderCollapsed() : this.renderNotCollapsed();
        const style = getStyle(name, data, keyPath, deep, dataType);
        /* eslint-disable jsx-a11y/no-static-element-interactions */ if (keyPath.includes("overridenAttributes") || keyPath.includes("abilityScores") || keyPath.includes("savingThrows") || keyPath.includes("skills") || keyPath.includes("attack1") || keyPath.includes("attack2") || keyPath.includes("attack3") || keyPath.includes("localPosition") || keyPath.includes("flavorFlags") || keyPath.includes("functors") || keyPath.includes("staticRoleNames") || keyPath.includes("userProps") || keyPath.includes("occurencesList") || keyPath.includes("destinationsList")) return null;
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("div", {
            className: "rejt-array-node"
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            onClick: this.handleCollapseMode
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-name",
            style: style.name
        }, name, " ", ":", " ")), value);
    /* eslint-enable */ }
    constructor(props){
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name
        ];
        this.state = {
            data: props.data,
            name: props.name,
            keyPath: keyPath,
            deep: props.deep,
            nextDeep: props.deep + 1,
            collapsed: props.isCollapsed(keyPath, props.deep, props.data),
            addFormVisible: false
        };
        // Bind
        this.handleCollapseMode = this.handleCollapseMode.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleAddMode = this.handleAddMode.bind(this);
        this.handleAddValueAdd = this.handleAddValueAdd.bind(this);
        this.handleAddValueCancel = this.handleAddValueCancel.bind(this);
        this.handleEditValue = this.handleEditValue.bind(this);
        this.onChildUpdate = this.onChildUpdate.bind(this);
        this.renderCollapsed = this.renderCollapsed.bind(this);
        this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
    }
}
// Add prop types
$d75ab2710d4a52f0$var$JsonArray.propTypes = $d75ab2710d4a52f0$var$propTypes;
// Add default props
$d75ab2710d4a52f0$var$JsonArray.defaultProps = $d75ab2710d4a52f0$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $d75ab2710d4a52f0$export$2e2bcd8739ae039 = $d75ab2710d4a52f0$var$JsonArray;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 13/11/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 22/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $9f060e374a15eed4$var$basicFunctionPattern = new RegExp(// eslint-disable-next-line prefer-template
"" + /^function/.source + / *([$_a-zA-Z][$\w]*)?/.source // name
 + / *\([ \n]*([$_a-zA-Z][$\w]*(?:[ \n]*,[ \n]*[$_a-zA-Z][$\w]*)*)*?,?[ \n]*\)/.source // params
 + /[ \n]*{\n*(.*?)\n? *}$/.source, "s");
/* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /**
 * Try to regex match a string as a javascript function.
 * @param functionString {string} string to match
 * @param splitParams {boolean} whether to split parameters into an array
 * @returns {{name: string, params: string | string[], body: string} | null}
 */ function $9f060e374a15eed4$var$matchFunction(functionString, splitParams = false) {
    const match = $9f060e374a15eed4$var$basicFunctionPattern.exec(functionString);
    if (match === null) return null;
    return {
        name: match[1],
        params: splitParams ? $9f060e374a15eed4$var$commaSplit(match[2]) : match[2],
        body: match[3]
    };
}
/**
 * Split comma separated strings and trim surrounding whitespace.
 * @param string {string | undefined} a string of comma-separated strings
 * @returns {string[]} an array of elements that were separated by commas with
 *   surrounding whitespace trimmed. May be empty.
 */ function $9f060e374a15eed4$var$commaSplit(string) {
    if (!string) return [];
    return string.split(",").map((x)=>x.trim());
}
/**
 * Try creating an anonymous function from a string, or return null if it's
 * not a valid function definition.
 * Note that this is not a completely safe, there are still security flaws,
 * but it is safer than using `exec`.
 * @param functionString {string} string to try to parse as a function
 *   definition
 * @returns {Function | null} an anonymous function if the string is a valid
 *   function definition, else null
 */ function $9f060e374a15eed4$var$createFunction(functionString) {
    /* This is not an exhaustive check by any means
     * For instance, function names may have a wide variety of
     * unicode characters and still be valid... oh well!
     *
     * TEST CASES:
     *
     * // Should match (single-line):
     * function() {}
     * function () {}
     * function myFunc(){}
     * function myFunc(arg1){}
     * function(arg1,arg2, arg3,  arg4) {}
     * function myFunc(arg1, arg2, arg3){}
     * function myFunc(arg1, arg2, arg3){console.log('something');}
     * function myFunc(arg1,){}
     * function myFunc(arg1, ){}
     * function myFunc(arg1) {if (true) {var moreCurlyBraces = 1;}}
     *
     * // Should match (multi-line):
     * function myFunc(arg1, arg2, arg3) {
     *     console.log('something');
     * }
     *
     * function myFunc() {
     *     console.log('test');
     *     if (true) {
     *         console.log('test2');
     *     }
     * }
     *
     * // Should not match (single-line):
     * anotherFunction()
     * function myFunc {}
     * function myFunc()); (anotherFunction()
     * function myFunc(){}, anotherFunction()
     */ const match = $9f060e374a15eed4$var$matchFunction(functionString, true);
    if (!match) return null;
    // Here's the security flaw. We want this functionality for supporting
    // JSONP, so we've opted for the best attempt at maintaining some amount
    // of security. This should be a little better than eval because it
    // shouldn't automatically execute code, just create a function which can
    // be called later.
    // eslint-disable-next-line no-new-func
    const func = new Function(...match.params, match.body || "");
    func.displayName = match.name;
    return func;
}
/* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /**
 * Parse a string into either a function or a JSON element.
 * @param string {string} string to parse
 * @param allowFunctionEvaluation {boolean} whether to parse strings that
 *   are function definitions as Javascript
 * @returns {Function | Object | Array | null | boolean | number | string}
 */ function $9f060e374a15eed4$var$parse(string, allowFunctionEvaluation) {
    // Try parsing (and sanitizing) a function
    if (allowFunctionEvaluation) {
        const func = $9f060e374a15eed4$var$createFunction(string);
        if (func !== null) return func;
    }
    try {
        return JSON.parse(string);
    } catch (e) {
        return string;
    }
}
/**
 * A different implementation of Function.prototype.toString which tries to get
 * a function name using displayName when name is "anonymous".
 * @param func {Function} function to transform into a string
 * @returns {string} a string representing the function
 */ function $9f060e374a15eed4$export$3f4acdc58db5898f(func) {
    const pattern = /^function anonymous/;
    const funcStr = func.toString();
    if (pattern.test(funcStr) && func.displayName) return func.toString().replace(pattern, `function ${func.displayName}`);
    return funcStr;
}
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $9f060e374a15eed4$export$2e2bcd8739ae039 = $9f060e374a15eed4$var$parse;



/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $a2103bd4ea07bc32$var$propTypes = {
    name: (0, $a6H0q$proptypes).string.isRequired,
    value: (0, $a6H0q$proptypes).any.isRequired,
    originalValue: (0, $a6H0q$proptypes).any,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    handleRemove: (0, $a6H0q$proptypes).func,
    handleUpdateValue: (0, $a6H0q$proptypes).func,
    readOnly: (0, $a6H0q$proptypes).func.isRequired,
    dataType: (0, $a6H0q$proptypes).string,
    getStyle: (0, $a6H0q$proptypes).func.isRequired,
    editButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    textareaElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    minusMenuElement: (0, $a6H0q$proptypes).element,
    logger: (0, $a6H0q$proptypes).object.isRequired,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $a2103bd4ea07bc32$var$defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: ()=>{},
    editButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "Apply"),
    cancelButtonElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("button", null, "Cancel"),
    minusMenuElement: /*#__PURE__*/ (0, $a6H0q$react).createElement("span", null, " - ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $a2103bd4ea07bc32$var$JsonFunctionValue extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value
        });
    }
    componentDidUpdate() {
        const { editEnabled: editEnabled , inputRef: inputRef , name: name , value: value , keyPath: keyPath , deep: deep  } = this.state;
        const { readOnly: readOnly , dataType: dataType  } = this.props;
        const readOnlyResult = readOnly(name, value, keyPath, deep, dataType);
        if (editEnabled && !readOnlyResult && typeof inputRef.focus === "function") inputRef.focus();
    }
    handleEdit() {
        const { handleUpdateValue: handleUpdateValue , originalValue: originalValue , logger: logger , onSubmitValueParser: onSubmitValueParser , keyPath: keyPath  } = this.props;
        const { inputRef: inputRef , name: name , deep: deep  } = this.state;
        const newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);
        const result = {
            value: newValue,
            key: name
        };
        // Run update
        handleUpdateValue(result).then(()=>{
            // Cancel edit mode if necessary
            if (!(0, $23a5fe9e979d80ca$export$1172a3730e5c4525)(originalValue, newValue)) this.handleCancelEdit();
        }).catch(logger.error);
    }
    handleEditMode() {
        this.setState({
            editEnabled: true
        });
    }
    refInput(node) {
        this.state.inputRef = node;
    }
    handleCancelEdit() {
        this.setState({
            editEnabled: false
        });
    }
    render() {
        const { name: name , value: value , editEnabled: editEnabled , keyPath: keyPath , deep: deep  } = this.state;
        const { handleRemove: handleRemove , originalValue: originalValue , readOnly: readOnly , dataType: dataType , getStyle: getStyle , editButtonElement: editButtonElement , cancelButtonElement: cancelButtonElement , textareaElementGenerator: textareaElementGenerator , minusMenuElement: minusMenuElement , keyPath: comeFromKeyPath  } = this.props;
        const hotkeys = {
            Escape: this.handleCancelEdit,
            Enter: this.handleEdit
        };
        console.log("keyPath", keyPath);
        const style = getStyle(name, originalValue, keyPath, deep, dataType);
        let result = null;
        let minusElement = null;
        const resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);
        if (editEnabled && !resultOnlyResult) {
            const textareaElement = textareaElementGenerator((0, $9d11e61eaae386e6$export$2e2bcd8739ae039).VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
            const editButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(editButtonElement, {
                onClick: this.handleEdit
            });
            const cancelButtonElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(cancelButtonElement, {
                onClick: this.handleCancelEdit
            });
            const textareaElementLayout = /*#__PURE__*/ (0, $a6H0q$react).cloneElement(textareaElement, {
                ref: this.refInput,
                defaultValue: (0, $9f060e374a15eed4$export$3f4acdc58db5898f)(originalValue),
                onKeyUp: (0, $d55c30c34fe7164f$export$6a361f9cf16d448e)(hotkeys)
            });
            result = /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
                className: "rejt-edit-form",
                style: style.editForm
            }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout);
        } else /* eslint-disable jsx-a11y/no-static-element-interactions */ result = /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-value",
            style: style.value,
            onClick: resultOnlyResult ? null : this.handleEditMode
        }, value);
        if (!result || result === "") return null;
        if (keyPath.includes("textLine") || keyPath.includes("title") || keyPath.includes("description") || keyPath.includes("name") || keyPath.includes("stringValue") || keyPath.includes("stringsList")) return /*#__PURE__*/ (0, $a6H0q$react).createElement("li", {
            className: "rejt-function-value-node",
            style: style.li
        }, /*#__PURE__*/ (0, $a6H0q$react).createElement("span", {
            className: "rejt-name",
            style: style.name
        }, name, " : "), result);
        return null;
    }
    constructor(props){
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name
        ];
        this.state = {
            value: props.value,
            name: props.name,
            keyPath: keyPath,
            deep: props.deep,
            editEnabled: true,
            inputRef: null
        };
        // Bind
        this.handleEditMode = this.handleEditMode.bind(this);
        this.refInput = this.refInput.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
}
// Add prop types
$a2103bd4ea07bc32$var$JsonFunctionValue.propTypes = $a2103bd4ea07bc32$var$propTypes;
// Add default props
$a2103bd4ea07bc32$var$JsonFunctionValue.defaultProps = $a2103bd4ea07bc32$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $a2103bd4ea07bc32$export$2e2bcd8739ae039 = $a2103bd4ea07bc32$var$JsonFunctionValue;



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 27/02/18
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $aeb72de7c465f801$var$ERROR = "Error";
const $aeb72de7c465f801$var$OBJECT = "Object";
const $aeb72de7c465f801$var$ARRAY = "Array";
const $aeb72de7c465f801$var$STRING = "String";
const $aeb72de7c465f801$var$NUMBER = "Number";
const $aeb72de7c465f801$var$BOOLEAN = "Boolean";
const $aeb72de7c465f801$var$DATE = "Date";
const $aeb72de7c465f801$var$NULL = "Null";
const $aeb72de7c465f801$var$UNDEFINED = "Undefined";
const $aeb72de7c465f801$var$FUNCTION = "Function";
const $aeb72de7c465f801$var$SYMBOL = "Symbol";
var /* ************************************* */ /* ********       CLASSES       ******** */ /* ************************************* */ /* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $aeb72de7c465f801$export$2e2bcd8739ae039 = {
    ERROR: $aeb72de7c465f801$var$ERROR,
    OBJECT: $aeb72de7c465f801$var$OBJECT,
    ARRAY: $aeb72de7c465f801$var$ARRAY,
    STRING: $aeb72de7c465f801$var$STRING,
    NUMBER: $aeb72de7c465f801$var$NUMBER,
    BOOLEAN: $aeb72de7c465f801$var$BOOLEAN,
    DATE: $aeb72de7c465f801$var$DATE,
    NULL: $aeb72de7c465f801$var$NULL,
    UNDEFINED: $aeb72de7c465f801$var$UNDEFINED,
    FUNCTION: $aeb72de7c465f801$var$FUNCTION,
    SYMBOL: $aeb72de7c465f801$var$SYMBOL
};



/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $8eee1650ad9f7cc4$var$propTypes = {
    name: (0, $a6H0q$proptypes).string.isRequired,
    data: (0, $a6H0q$proptypes).any,
    isCollapsed: (0, $a6H0q$proptypes).func.isRequired,
    keyPath: (0, $a6H0q$proptypes).array,
    deep: (0, $a6H0q$proptypes).number,
    handleRemove: (0, $a6H0q$proptypes).func,
    handleUpdateValue: (0, $a6H0q$proptypes).func,
    onUpdate: (0, $a6H0q$proptypes).func.isRequired,
    onDeltaUpdate: (0, $a6H0q$proptypes).func.isRequired,
    readOnly: (0, $a6H0q$proptypes).func.isRequired,
    getStyle: (0, $a6H0q$proptypes).func.isRequired,
    addButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    editButtonElement: (0, $a6H0q$proptypes).element,
    inputElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    textareaElementGenerator: (0, $a6H0q$proptypes).func.isRequired,
    minusMenuElement: (0, $a6H0q$proptypes).element,
    plusMenuElement: (0, $a6H0q$proptypes).element,
    beforeRemoveAction: (0, $a6H0q$proptypes).func,
    beforeAddAction: (0, $a6H0q$proptypes).func,
    beforeUpdateAction: (0, $a6H0q$proptypes).func,
    logger: (0, $a6H0q$proptypes).object.isRequired,
    onSubmitValueParser: (0, $a6H0q$proptypes).func.isRequired
};
// Default props
const $8eee1650ad9f7cc4$var$defaultProps = {
    keyPath: [],
    deep: 0
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $8eee1650ad9f7cc4$var$JsonNode extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        });
    }
    render() {
        const { data: data , name: name , keyPath: keyPath , deep: deep  } = this.state;
        const { isCollapsed: isCollapsed , handleRemove: handleRemove , handleUpdateValue: handleUpdateValue , onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate , readOnly: readOnly , getStyle: getStyle , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , editButtonElement: editButtonElement , inputElementGenerator: inputElementGenerator , textareaElementGenerator: textareaElementGenerator , minusMenuElement: minusMenuElement , plusMenuElement: plusMenuElement , beforeRemoveAction: beforeRemoveAction , beforeAddAction: beforeAddAction , beforeUpdateAction: beforeUpdateAction , logger: logger , onSubmitValueParser: onSubmitValueParser  } = this.props;
        const readOnlyTrue = ()=>true;
        const dataType = (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(data);
        switch(dataType){
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).ERROR:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $96531d4eb44d63bb$export$2e2bcd8739ae039), {
                    data: data,
                    name: name,
                    isCollapsed: isCollapsed,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    onUpdate: onUpdate,
                    onDeltaUpdate: onDeltaUpdate,
                    readOnly: readOnlyTrue,
                    dataType: dataType,
                    getStyle: getStyle,
                    addButtonElement: addButtonElement,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    textareaElementGenerator: textareaElementGenerator,
                    minusMenuElement: minusMenuElement,
                    plusMenuElement: plusMenuElement,
                    beforeRemoveAction: beforeRemoveAction,
                    beforeAddAction: beforeAddAction,
                    beforeUpdateAction: beforeUpdateAction,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).OBJECT:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $96531d4eb44d63bb$export$2e2bcd8739ae039), {
                    data: data,
                    name: name,
                    isCollapsed: isCollapsed,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    onUpdate: onUpdate,
                    onDeltaUpdate: onDeltaUpdate,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    addButtonElement: addButtonElement,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    textareaElementGenerator: textareaElementGenerator,
                    minusMenuElement: minusMenuElement,
                    plusMenuElement: plusMenuElement,
                    beforeRemoveAction: beforeRemoveAction,
                    beforeAddAction: beforeAddAction,
                    beforeUpdateAction: beforeUpdateAction,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).ARRAY:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $d75ab2710d4a52f0$export$2e2bcd8739ae039), {
                    data: data,
                    name: name,
                    isCollapsed: isCollapsed,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    onUpdate: onUpdate,
                    onDeltaUpdate: onDeltaUpdate,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    addButtonElement: addButtonElement,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    textareaElementGenerator: textareaElementGenerator,
                    minusMenuElement: minusMenuElement,
                    plusMenuElement: plusMenuElement,
                    beforeRemoveAction: beforeRemoveAction,
                    beforeAddAction: beforeAddAction,
                    beforeUpdateAction: beforeUpdateAction,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            // return (<JsonValue
            //     name={name}
            //     value={`"${data}"`}
            //     originalValue={data}
            //     keyPath={keyPath}
            //     deep={deep}
            //     handleRemove={handleRemove}
            //     handleUpdateValue={handleUpdateValue}
            //     readOnly={readOnly}
            //     dataType={dataType}
            //     getStyle={getStyle}
            //     cancelButtonElement={cancelButtonElement}
            //     editButtonElement={editButtonElement}
            //     inputElementGenerator={inputElementGenerator}
            //     minusMenuElement={minusMenuElement}
            //     logger={logger}
            //     onSubmitValueParser={onSubmitValueParser}
            // />);
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).NUMBER:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: data,
                    originalValue: data,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).BOOLEAN:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: data ? "true" : "false",
                    originalValue: data,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).DATE:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: data.toISOString(),
                    originalValue: data,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnlyTrue,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).NULL:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: "null",
                    originalValue: "null",
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).UNDEFINED:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: "undefined",
                    originalValue: "undefined",
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).STRING:
                // case dataTypes.FUNCTION:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $a2103bd4ea07bc32$export$2e2bcd8739ae039), {
                    name: name,
                    value: data,
                    originalValue: data,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnly,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    textareaElementGenerator: textareaElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            case (0, $aeb72de7c465f801$export$2e2bcd8739ae039).SYMBOL:
                return /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $5bdc19770f09e5f2$export$2e2bcd8739ae039), {
                    name: name,
                    value: data.toString(),
                    originalValue: data,
                    keyPath: keyPath,
                    deep: deep,
                    handleRemove: handleRemove,
                    handleUpdateValue: handleUpdateValue,
                    readOnly: readOnlyTrue,
                    dataType: dataType,
                    getStyle: getStyle,
                    cancelButtonElement: cancelButtonElement,
                    editButtonElement: editButtonElement,
                    inputElementGenerator: inputElementGenerator,
                    minusMenuElement: minusMenuElement,
                    logger: logger,
                    onSubmitValueParser: onSubmitValueParser
                });
            default:
                return null;
        }
    }
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            name: props.name,
            keyPath: props.keyPath,
            deep: props.deep
        };
    }
}
// Add prop types
$8eee1650ad9f7cc4$var$JsonNode.propTypes = $8eee1650ad9f7cc4$var$propTypes;
// Add default props
$8eee1650ad9f7cc4$var$JsonNode.defaultProps = $8eee1650ad9f7cc4$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $8eee1650ad9f7cc4$export$2e2bcd8739ae039 = $8eee1650ad9f7cc4$var$JsonNode;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 20/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $6a9e0261faea78ad$export$be5493f9613cbbe = {
    minus: {
        color: "red"
    },
    plus: {
        color: "green"
    },
    collapsed: {
        color: "grey"
    },
    delimiter: {},
    ul: {
        padding: "0px",
        margin: "0 0 0 25px",
        listStyle: "none"
    },
    name: {
        color: "#2287CD"
    },
    addForm: {}
};
const $6a9e0261faea78ad$export$2f23118c22fb2630 = {
    minus: {
        color: "red"
    },
    plus: {
        color: "green"
    },
    collapsed: {
        color: "grey"
    },
    delimiter: {},
    ul: {
        padding: "0px",
        margin: "0 0 0 25px",
        listStyle: "none"
    },
    name: {
        color: "#2287CD"
    },
    addForm: {}
};
const $6a9e0261faea78ad$export$2ab9a8f9f1186f14 = {
    minus: {
        color: "red"
    },
    editForm: {},
    value: {
        color: "#7bba3d"
    },
    li: {
        minHeight: "22px",
        lineHeight: "22px",
        outline: "0px"
    },
    name: {
        color: "#2287CD"
    }
};







/* ************************************* */ /* ********    VARIABLES    ******** */ /* ************************************* */ // Prop types
const $7f4e35afd817384e$var$propTypes = {
    data: (0, $a6H0q$proptypes).any.isRequired,
    rootName: (0, $a6H0q$proptypes).string,
    isCollapsed: (0, $a6H0q$proptypes).func,
    onFullyUpdate: (0, $a6H0q$proptypes).func,
    onDeltaUpdate: (0, $a6H0q$proptypes).func,
    readOnly: (0, $a6H0q$proptypes).oneOfType([
        (0, $a6H0q$proptypes).bool,
        (0, $a6H0q$proptypes).func
    ]),
    getStyle: (0, $a6H0q$proptypes).func,
    addButtonElement: (0, $a6H0q$proptypes).element,
    cancelButtonElement: (0, $a6H0q$proptypes).element,
    editButtonElement: (0, $a6H0q$proptypes).element,
    inputElement: (0, $a6H0q$proptypes).oneOfType([
        (0, $a6H0q$proptypes).element,
        (0, $a6H0q$proptypes).func
    ]),
    textareaElement: (0, $a6H0q$proptypes).oneOfType([
        (0, $a6H0q$proptypes).element,
        (0, $a6H0q$proptypes).func
    ]),
    minusMenuElement: (0, $a6H0q$proptypes).element,
    plusMenuElement: (0, $a6H0q$proptypes).element,
    beforeRemoveAction: (0, $a6H0q$proptypes).func,
    beforeAddAction: (0, $a6H0q$proptypes).func,
    beforeUpdateAction: (0, $a6H0q$proptypes).func,
    logger: (0, $a6H0q$proptypes).object,
    onSubmitValueParser: (0, $a6H0q$proptypes).func,
    allowFunctionEvaluation: (0, $a6H0q$proptypes).bool
};
// Default props
const $7f4e35afd817384e$var$defaultProps = {
    rootName: "root",
    isCollapsed: (keyPath, deep)=>deep !== -1,
    getStyle: (keyName, data, keyPath, deep, dataType)=>{
        switch(dataType){
            case "Object":
            case "Error":
                return 0, $6a9e0261faea78ad$export$be5493f9613cbbe;
            case "Array":
                return 0, $6a9e0261faea78ad$export$2f23118c22fb2630;
            default:
                return 0, $6a9e0261faea78ad$export$2ab9a8f9f1186f14;
        }
    },
    /* eslint-disable no-unused-vars */ readOnly: (keyName, data, keyPath, deep, dataType)=>false,
    onFullyUpdate: (data)=>{},
    onDeltaUpdate: ({ type: type , keyPath: keyPath , deep: deep , key: key , newValue: newValue , oldValue: oldValue  })=>{},
    beforeRemoveAction: (key, keyPath, deep, oldValue)=>new Promise((resolve)=>resolve()),
    beforeAddAction: (key, keyPath, deep, newValue)=>new Promise((resolve)=>resolve()),
    beforeUpdateAction: (key, keyPath, deep, oldValue, newValue)=>new Promise((resolve)=>resolve()),
    logger: {
        error: ()=>{}
    },
    inputElement: (usage, keyPath, deep, keyName, data, dataType)=>/*#__PURE__*/ (0, $a6H0q$react).createElement("textarea", null),
    textareaElement: (usage, keyPath, deep, keyName, data, dataType)=>/*#__PURE__*/ (0, $a6H0q$react).createElement("textarea", null),
    /* eslint-enable no-unused-vars */ allowFunctionEvaluation: true
};
const $7f4e35afd817384e$var$createParsingFunction = (allowFunctionEvaluation)=>(isEditMode, keyPath, deep, name, rawValue)=>(0, $9f060e374a15eed4$export$2e2bcd8739ae039)(rawValue, allowFunctionEvaluation);
/* ************************************* */ /* ********    COMPONENT    ******** */ /* ************************************* */ class $7f4e35afd817384e$export$77412d412e77b482 extends (0, $a6H0q$Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data,
            rootName: nextProps.rootName
        });
        let { onSubmitValueParserWasGenerated: onSubmitValueParserWasGenerated  } = this.state;
        if (nextProps.onSubmitValueParser && nextProps.onSubmitValueParser !== this.state.onSubmitValueParser) {
            // We just added a new submit value parser, so this is definitely
            // not our default parser anymore
            onSubmitValueParserWasGenerated = false;
            this.setState({
                onSubmitValueParser: nextProps.onSubmitValueParser,
                onSubmitValueParserWasGenerated: onSubmitValueParserWasGenerated
            });
        }
        if (onSubmitValueParserWasGenerated && nextProps.allowFunctionEvaluation !== this.props.allowFunctionEvaluation) // Create a new submit value parser that adheres to the new
        // `allowFunctionEvaluation` value as long as we know the parser
        // was generated by us
        this.setState({
            onSubmitValueParser: $7f4e35afd817384e$var$createParsingFunction(nextProps.allowFunctionEvaluation)
        });
    }
    onUpdate(key, data) {
        this.setState({
            data: data
        });
        // Call on fully update
        const { onFullyUpdate: onFullyUpdate  } = this.props;
        onFullyUpdate(data);
    }
    render() {
        const { data: data , rootName: rootName , onSubmitValueParser: onSubmitValueParser  } = this.state;
        const { isCollapsed: isCollapsed , onDeltaUpdate: onDeltaUpdate , readOnly: readOnly , getStyle: getStyle , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , editButtonElement: editButtonElement , inputElement: inputElement , textareaElement: textareaElement , minusMenuElement: minusMenuElement , plusMenuElement: plusMenuElement , beforeRemoveAction: beforeRemoveAction , beforeAddAction: beforeAddAction , beforeUpdateAction: beforeUpdateAction , logger: logger  } = this.props;
        // Node type
        const dataType = (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(data);
        let node = null;
        let readOnlyFunction = readOnly;
        if ((0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(readOnly) === "Boolean") readOnlyFunction = ()=>readOnly;
        let inputElementFunction = inputElement;
        if (inputElement && (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(inputElement) !== "Function") inputElementFunction = ()=>inputElement;
        let textareaElementFunction = textareaElement;
        if (textareaElement && (0, $23a5fe9e979d80ca$export$11cc42aebef2ef3a)(textareaElement) !== "Function") textareaElementFunction = ()=>textareaElement;
        if (dataType === "Object" || dataType === "Array") node = /*#__PURE__*/ (0, $a6H0q$react).createElement((0, $8eee1650ad9f7cc4$export$2e2bcd8739ae039), {
            data: data,
            name: rootName,
            collapsed: false,
            deep: -1,
            isCollapsed: isCollapsed,
            onUpdate: this.onUpdate,
            onDeltaUpdate: onDeltaUpdate,
            readOnly: readOnlyFunction,
            getStyle: getStyle,
            addButtonElement: addButtonElement,
            cancelButtonElement: cancelButtonElement,
            editButtonElement: editButtonElement,
            inputElementGenerator: inputElementFunction,
            textareaElementGenerator: textareaElementFunction,
            minusMenuElement: minusMenuElement,
            plusMenuElement: plusMenuElement,
            beforeRemoveAction: beforeRemoveAction,
            beforeAddAction: beforeAddAction,
            beforeUpdateAction: beforeUpdateAction,
            logger: logger,
            onSubmitValueParser: onSubmitValueParser
        });
        else node = "Data must be an Array or Object";
        return /*#__PURE__*/ (0, $a6H0q$react).createElement("div", {
            className: "rejt-tree"
        }, node);
    }
    constructor(props){
        super(props);
        let onSubmitValueParser;
        // This WasGenerated value lets us know whether we generated the parsing
        // function, so we can appropriately react to changes of
        // `allowFunctionEvaluation`
        let onSubmitValueParserWasGenerated;
        if (props.onSubmitValueParser) {
            onSubmitValueParser = props.onSubmitValueParser;
            onSubmitValueParserWasGenerated = false;
        } else {
            onSubmitValueParser = $7f4e35afd817384e$var$createParsingFunction(props.allowFunctionEvaluation);
            onSubmitValueParserWasGenerated = true;
        }
        this.state = {
            data: props.data,
            rootName: props.rootName,
            onSubmitValueParser: onSubmitValueParser,
            onSubmitValueParserWasGenerated: onSubmitValueParserWasGenerated
        };
        // Bind
        this.onUpdate = this.onUpdate.bind(this);
    }
}
// Add prop types
$7f4e35afd817384e$export$77412d412e77b482.propTypes = $7f4e35afd817384e$var$propTypes;
// Add default props
$7f4e35afd817384e$export$77412d412e77b482.defaultProps = $7f4e35afd817384e$var$defaultProps;


export {$7f4e35afd817384e$export$77412d412e77b482 as JsonTree, $81a31a9bc7e2feaa$export$58df28f56f04475d as ADD_DELTA_TYPE, $81a31a9bc7e2feaa$export$eb8fc0985296a20 as REMOVE_DELTA_TYPE, $81a31a9bc7e2feaa$export$f84f3b228725d3db as UPDATE_DELTA_TYPE, $aeb72de7c465f801$export$2e2bcd8739ae039 as DATA_TYPES, $9d11e61eaae386e6$export$2e2bcd8739ae039 as INPUT_USAGE_TYPES};
//# sourceMappingURL=JsonTree.esm.js.map
