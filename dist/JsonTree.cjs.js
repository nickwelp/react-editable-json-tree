var $hUpBc$react = require("react");
var $hUpBc$proptypes = require("prop-types");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "JsonTree", function () { return $d3d910001b9b49c3$export$77412d412e77b482; });
$parcel$export(module.exports, "ADD_DELTA_TYPE", function () { return $32aef4b1c94beebd$export$58df28f56f04475d; });
$parcel$export(module.exports, "REMOVE_DELTA_TYPE", function () { return $32aef4b1c94beebd$export$eb8fc0985296a20; });
$parcel$export(module.exports, "UPDATE_DELTA_TYPE", function () { return $32aef4b1c94beebd$export$f84f3b228725d3db; });
$parcel$export(module.exports, "DATA_TYPES", function () { return $d40b8b9d71ae28d9$export$2e2bcd8739ae039; });
$parcel$export(module.exports, "INPUT_USAGE_TYPES", function () { return $69190de63a75507f$export$2e2bcd8739ae039; });
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
 */ function $17f91d8de531be86$export$11cc42aebef2ef3a(obj) {
    if (obj !== null && typeof obj === "object" && !Array.isArray(obj) && typeof obj[Symbol.iterator] === "function") return "Iterable";
    return Object.prototype.toString.call(obj).slice(8, -1);
}
/**
 * Is Component will change ?
 * @param oldValue {*} old value
 * @param newValue {*} new value
 * @returns {boolean} result
 */ function $17f91d8de531be86$export$1172a3730e5c4525(oldValue, newValue) {
    const oldType = $17f91d8de531be86$export$11cc42aebef2ef3a(oldValue);
    const newType = $17f91d8de531be86$export$11cc42aebef2ef3a(newValue);
    return (oldType === "Function" || newType === "Function") && newType !== oldType;
}


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 27/02/18
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $69190de63a75507f$var$VALUE = "value";
const $69190de63a75507f$var$KEY = "key";
var /* ************************************* */ /* ********       CLASSES       ******** */ /* ************************************* */ /* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $69190de63a75507f$export$2e2bcd8739ae039 = {
    KEY: $69190de63a75507f$var$KEY,
    VALUE: $69190de63a75507f$var$VALUE
};


/**
 * Handle key events with handlers
 * @param {{[keyName: string]: () => void}} hotkeys an object with keyboard key
 *   names and associated handlers to call for those keys
 * @returns {(keyEvent: KeyboardEvent) => void} an event handler to handle key
 *   events for the given hotkeys
 */ const $c7f63202f004c378$export$6a361f9cf16d448e = (hotkeys)=>(keyEvent)=>{
        if (Object.hasOwn(hotkeys, keyEvent.key)) hotkeys[keyEvent.key]();
    };


/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $0e722cdde5701c82$var$propTypes = {
    name: (0, ($parcel$interopDefault($hUpBc$proptypes))).string.isRequired,
    value: (0, ($parcel$interopDefault($hUpBc$proptypes))).any.isRequired,
    originalValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).any,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    handleRemove: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    handleUpdateValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    dataType: (0, ($parcel$interopDefault($hUpBc$proptypes))).string,
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $0e722cdde5701c82$var$defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: ()=>Promise.resolve(),
    editButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "Apply"),
    cancelButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "Cancel"),
    minusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " - ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $0e722cdde5701c82$var$JsonValue extends (0, $hUpBc$react.Component) {
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
            if (!(0, $17f91d8de531be86$export$1172a3730e5c4525)(originalValue, newValue)) this.handleCancelEdit();
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
            const inputElement = inputElementGenerator((0, $69190de63a75507f$export$2e2bcd8739ae039).VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
            const editButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(editButtonElement, {
                onClick: this.handleEdit
            });
            const cancelButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(cancelButtonElement, {
                onClick: this.handleCancelEdit
            });
            const inputElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(inputElement, {
                ref: this.refInput,
                defaultValue: originalValue,
                onKeyUp: (0, $c7f63202f004c378$export$6a361f9cf16d448e)(hotkeys)
            });
            result = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
                className: "rejt-edit-form",
                style: style.editForm
            }, inputElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout);
            minusElement = null;
        } else {
            /* eslint-disable jsx-a11y/no-static-element-interactions */ result = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
                className: "rejt-value",
                style: style.value,
                onClick: readOnlyResult ? null : this.handleEditMode
            }, value);
            /* eslint-enable */ const minusMenuLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(minusMenuElement, {
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
$0e722cdde5701c82$var$JsonValue.propTypes = $0e722cdde5701c82$var$propTypes;
// Add default props
$0e722cdde5701c82$var$JsonValue.defaultProps = $0e722cdde5701c82$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $0e722cdde5701c82$export$2e2bcd8739ae039 = $0e722cdde5701c82$var$JsonValue;


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
const $3f3921a36699af84$var$propTypes = {
    handleAdd: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    handleCancel: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    onlyValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).bool,
    addButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $3f3921a36699af84$var$defaultProps = {
    onlyValue: false,
    addButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "+"),
    cancelButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "c")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $3f3921a36699af84$var$JsonAddValue extends (0, $hUpBc$react.Component) {
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
        const addButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(addButtonElement, {
            onClick: this.onSubmit
        });
        const cancelButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(cancelButtonElement, {
            onClick: handleCancel
        });
        const inputElementValue = inputElementGenerator((0, $69190de63a75507f$export$2e2bcd8739ae039).VALUE, keyPath, deep);
        const inputElementValueLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(inputElementValue, {
            placeholder: "Value",
            ref: this.refInputValue,
            onKeyUp: (0, $c7f63202f004c378$export$6a361f9cf16d448e)(hotkeys)
        });
        let inputElementKeyLayout = null;
        let separatorElement = null;
        if (!onlyValue) {
            const inputElementKey = inputElementGenerator((0, $69190de63a75507f$export$2e2bcd8739ae039).KEY, keyPath, deep);
            inputElementKeyLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(inputElementKey, {
                placeholder: "Key",
                ref: this.refInputKey,
                onKeyUp: (0, $c7f63202f004c378$export$6a361f9cf16d448e)(hotkeys)
            });
            separatorElement = ":";
        }
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
$3f3921a36699af84$var$JsonAddValue.propTypes = $3f3921a36699af84$var$propTypes;
// Add default props
$3f3921a36699af84$var$JsonAddValue.defaultProps = $3f3921a36699af84$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $3f3921a36699af84$export$2e2bcd8739ae039 = $3f3921a36699af84$var$JsonAddValue;



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 23/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $32aef4b1c94beebd$export$58df28f56f04475d = "ADD_DELTA_TYPE";
const $32aef4b1c94beebd$export$eb8fc0985296a20 = "REMOVE_DELTA_TYPE";
const $32aef4b1c94beebd$export$f84f3b228725d3db = "UPDATE_DELTA_TYPE";


/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $845f1b807cc009ad$var$propTypes = {
    data: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    name: (0, ($parcel$interopDefault($hUpBc$proptypes))).string.isRequired,
    isCollapsed: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    handleRemove: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    onUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    onDeltaUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    dataType: (0, ($parcel$interopDefault($hUpBc$proptypes))).string,
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    addButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    textareaElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    plusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    beforeRemoveAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeAddAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeUpdateAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $845f1b807cc009ad$var$defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " - "),
    plusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " + ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $845f1b807cc009ad$var$JsonObject extends (0, $hUpBc$react.Component) {
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
                type: (0, $32aef4b1c94beebd$export$58df28f56f04475d),
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
                const objType = (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(oldValue);
                const deltaUpdateResult = {
                    keyPath: keyPath,
                    deep: deep,
                    key: key,
                    oldValue: oldValue
                };
                if (objType === "Object" || objType === "Array") {
                    deltaUpdateResult.type = (0, $32aef4b1c94beebd$export$f84f3b228725d3db);
                    deltaUpdateResult.newValue = null;
                    data[key] = null;
                } else {
                    deltaUpdateResult.type = (0, $32aef4b1c94beebd$export$eb8fc0985296a20);
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
                    type: (0, $32aef4b1c94beebd$export$f84f3b228725d3db),
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
        /* eslint-disable jsx-a11y/no-static-element-interactions */ return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-collapsed"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
            const minusMenuLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(minusMenuElement, {
                onClick: handleRemove,
                className: "rejt-minus-menu",
                style: minus
            });
            minusElement = deep !== -1 ? minusMenuLayout : null;
        }
        const list = keyList.map((key)=>/*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $238ab26352b317ed$export$2e2bcd8739ae039), {
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
            const plusMenuLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(plusMenuElement, {
                onClick: this.handleAddMode,
                className: "rejt-plus-menu",
                style: plus
            });
            menu = addFormVisible ? /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
                className: "rejt-add-form",
                style: addForm
            }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $3f3921a36699af84$export$2e2bcd8739ae039), {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                inputElementGenerator: inputElementGenerator,
                keyPath: keyPath,
                deep: deep,
                onSubmitValueParser: onSubmitValueParser
            })) : /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " ");
        }
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-not-collapsed"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, startObject), /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("ul", {
            className: "rejt-not-collapsed-list",
            style: ul
        }, list), /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("div", {
            className: "rejt-object-node"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            onClick: this.handleCollapseMode
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
$845f1b807cc009ad$var$JsonObject.propTypes = $845f1b807cc009ad$var$propTypes;
// Add default props
$845f1b807cc009ad$var$JsonObject.defaultProps = $845f1b807cc009ad$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $845f1b807cc009ad$export$2e2bcd8739ae039 = $845f1b807cc009ad$var$JsonObject;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 20/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 





/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $2c803c9d02b52f75$var$propTypes = {
    data: (0, ($parcel$interopDefault($hUpBc$proptypes))).array.isRequired,
    name: (0, ($parcel$interopDefault($hUpBc$proptypes))).string.isRequired,
    isCollapsed: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    handleRemove: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    onUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    onDeltaUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    dataType: (0, ($parcel$interopDefault($hUpBc$proptypes))).string,
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    addButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    textareaElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    plusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    beforeRemoveAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeAddAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeUpdateAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $2c803c9d02b52f75$var$defaultProps = {
    keyPath: [],
    deep: 0,
    minusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " - "),
    plusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " + ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $2c803c9d02b52f75$var$JsonArray extends (0, $hUpBc$react.Component) {
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
                const objType = (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(data[index]);
                const deltaUpdateResult = {
                    keyPath: keyPath,
                    deep: deep,
                    key: index,
                    oldValue: oldValue
                };
                if (objType === "Object" || objType === "Array") {
                    deltaUpdateResult.type = (0, $32aef4b1c94beebd$export$f84f3b228725d3db);
                    deltaUpdateResult.newValue = null;
                    data[index] = null;
                } else {
                    deltaUpdateResult.type = (0, $32aef4b1c94beebd$export$eb8fc0985296a20);
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
                type: (0, $32aef4b1c94beebd$export$58df28f56f04475d),
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
                    type: (0, $32aef4b1c94beebd$export$f84f3b228725d3db),
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
        /* eslint-disable jsx-a11y/no-static-element-interactions */ return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-collapsed"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
            const minusMenuLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(minusMenuElement, {
                onClick: handleRemove,
                className: "rejt-minus-menu",
                style: minus
            });
            minusElement = deep !== -1 ? minusMenuLayout : null;
        }
        const list = data.map((item, index)=>/*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $238ab26352b317ed$export$2e2bcd8739ae039), {
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
            const plusMenuLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(plusMenuElement, {
                onClick: this.handleAddMode,
                className: "rejt-plus-menu",
                style: plus
            });
            menu = addFormVisible ? /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
                className: "rejt-add-form",
                style: addForm
            }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $3f3921a36699af84$export$2e2bcd8739ae039), {
                handleAdd: this.handleAddValueAdd,
                handleCancel: this.handleAddValueCancel,
                onlyValue: onlyValue,
                addButtonElement: addButtonElement,
                cancelButtonElement: cancelButtonElement,
                inputElementGenerator: inputElementGenerator,
                keyPath: keyPath,
                deep: deep,
                onSubmitValueParser: onSubmitValueParser
            })) : /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " ");
        }
        const startObject = "[";
        const endObject = "]";
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-not-collapsed"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-not-collapsed-delimiter",
            style: delimiter
        }, startObject), /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("ul", {
            className: "rejt-not-collapsed-list",
            style: ul
        }, list), /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("div", {
            className: "rejt-array-node"
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            onClick: this.handleCollapseMode
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
$2c803c9d02b52f75$var$JsonArray.propTypes = $2c803c9d02b52f75$var$propTypes;
// Add default props
$2c803c9d02b52f75$var$JsonArray.defaultProps = $2c803c9d02b52f75$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $2c803c9d02b52f75$export$2e2bcd8739ae039 = $2c803c9d02b52f75$var$JsonArray;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 13/11/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ 



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 22/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $cd404796c303f47e$var$basicFunctionPattern = new RegExp(// eslint-disable-next-line prefer-template
"" + /^function/.source + / *([$_a-zA-Z][$\w]*)?/.source // name
 + / *\([ \n]*([$_a-zA-Z][$\w]*(?:[ \n]*,[ \n]*[$_a-zA-Z][$\w]*)*)*?,?[ \n]*\)/.source // params
 + /[ \n]*{\n*(.*?)\n? *}$/.source, "s");
/* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /**
 * Try to regex match a string as a javascript function.
 * @param functionString {string} string to match
 * @param splitParams {boolean} whether to split parameters into an array
 * @returns {{name: string, params: string | string[], body: string} | null}
 */ function $cd404796c303f47e$var$matchFunction(functionString, splitParams = false) {
    const match = $cd404796c303f47e$var$basicFunctionPattern.exec(functionString);
    if (match === null) return null;
    return {
        name: match[1],
        params: splitParams ? $cd404796c303f47e$var$commaSplit(match[2]) : match[2],
        body: match[3]
    };
}
/**
 * Split comma separated strings and trim surrounding whitespace.
 * @param string {string | undefined} a string of comma-separated strings
 * @returns {string[]} an array of elements that were separated by commas with
 *   surrounding whitespace trimmed. May be empty.
 */ function $cd404796c303f47e$var$commaSplit(string) {
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
 */ function $cd404796c303f47e$var$createFunction(functionString) {
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
     */ const match = $cd404796c303f47e$var$matchFunction(functionString, true);
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
 */ function $cd404796c303f47e$var$parse(string, allowFunctionEvaluation) {
    // Try parsing (and sanitizing) a function
    if (allowFunctionEvaluation) {
        const func = $cd404796c303f47e$var$createFunction(string);
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
 */ function $cd404796c303f47e$export$3f4acdc58db5898f(func) {
    const pattern = /^function anonymous/;
    const funcStr = func.toString();
    if (pattern.test(funcStr) && func.displayName) return func.toString().replace(pattern, `function ${func.displayName}`);
    return funcStr;
}
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $cd404796c303f47e$export$2e2bcd8739ae039 = $cd404796c303f47e$var$parse;



/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $d3a1b610f878e9aa$var$propTypes = {
    name: (0, ($parcel$interopDefault($hUpBc$proptypes))).string.isRequired,
    value: (0, ($parcel$interopDefault($hUpBc$proptypes))).any.isRequired,
    originalValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).any,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    handleRemove: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    handleUpdateValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    dataType: (0, ($parcel$interopDefault($hUpBc$proptypes))).string,
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    textareaElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $d3a1b610f878e9aa$var$defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: ()=>{},
    editButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "Apply"),
    cancelButtonElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("button", null, "Cancel"),
    minusMenuElement: /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", null, " - ")
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $d3a1b610f878e9aa$var$JsonFunctionValue extends (0, $hUpBc$react.Component) {
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
            if (!(0, $17f91d8de531be86$export$1172a3730e5c4525)(originalValue, newValue)) this.handleCancelEdit();
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
            const textareaElement = textareaElementGenerator((0, $69190de63a75507f$export$2e2bcd8739ae039).VALUE, comeFromKeyPath, deep, name, originalValue, dataType);
            const editButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(editButtonElement, {
                onClick: this.handleEdit
            });
            const cancelButtonElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(cancelButtonElement, {
                onClick: this.handleCancelEdit
            });
            const textareaElementLayout = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).cloneElement(textareaElement, {
                ref: this.refInput,
                defaultValue: (0, $cd404796c303f47e$export$3f4acdc58db5898f)(originalValue),
                onKeyUp: (0, $c7f63202f004c378$export$6a361f9cf16d448e)(hotkeys)
            });
            result = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
                className: "rejt-edit-form",
                style: style.editForm
            }, textareaElementLayout, " ", cancelButtonElementLayout, editButtonElementLayout);
        } else /* eslint-disable jsx-a11y/no-static-element-interactions */ result = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
            className: "rejt-value",
            style: style.value,
            onClick: resultOnlyResult ? null : this.handleEditMode
        }, value);
        if (!result || result === "") return null;
        if (keyPath.includes("textLine") || keyPath.includes("title") || keyPath.includes("description") || keyPath.includes("name") || keyPath.includes("stringValue") || keyPath.includes("stringsList")) return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("li", {
            className: "rejt-function-value-node",
            style: style.li
        }, /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("span", {
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
$d3a1b610f878e9aa$var$JsonFunctionValue.propTypes = $d3a1b610f878e9aa$var$propTypes;
// Add default props
$d3a1b610f878e9aa$var$JsonFunctionValue.defaultProps = $d3a1b610f878e9aa$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $d3a1b610f878e9aa$export$2e2bcd8739ae039 = $d3a1b610f878e9aa$var$JsonFunctionValue;



/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 27/02/18
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $d40b8b9d71ae28d9$var$ERROR = "Error";
const $d40b8b9d71ae28d9$var$OBJECT = "Object";
const $d40b8b9d71ae28d9$var$ARRAY = "Array";
const $d40b8b9d71ae28d9$var$STRING = "String";
const $d40b8b9d71ae28d9$var$NUMBER = "Number";
const $d40b8b9d71ae28d9$var$BOOLEAN = "Boolean";
const $d40b8b9d71ae28d9$var$DATE = "Date";
const $d40b8b9d71ae28d9$var$NULL = "Null";
const $d40b8b9d71ae28d9$var$UNDEFINED = "Undefined";
const $d40b8b9d71ae28d9$var$FUNCTION = "Function";
const $d40b8b9d71ae28d9$var$SYMBOL = "Symbol";
var /* ************************************* */ /* ********       CLASSES       ******** */ /* ************************************* */ /* ************************************* */ /* ********  PRIVATE FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********   PUBLIC FUNCTIONS  ******** */ /* ************************************* */ /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $d40b8b9d71ae28d9$export$2e2bcd8739ae039 = {
    ERROR: $d40b8b9d71ae28d9$var$ERROR,
    OBJECT: $d40b8b9d71ae28d9$var$OBJECT,
    ARRAY: $d40b8b9d71ae28d9$var$ARRAY,
    STRING: $d40b8b9d71ae28d9$var$STRING,
    NUMBER: $d40b8b9d71ae28d9$var$NUMBER,
    BOOLEAN: $d40b8b9d71ae28d9$var$BOOLEAN,
    DATE: $d40b8b9d71ae28d9$var$DATE,
    NULL: $d40b8b9d71ae28d9$var$NULL,
    UNDEFINED: $d40b8b9d71ae28d9$var$UNDEFINED,
    FUNCTION: $d40b8b9d71ae28d9$var$FUNCTION,
    SYMBOL: $d40b8b9d71ae28d9$var$SYMBOL
};



/* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ // Prop types
const $238ab26352b317ed$var$propTypes = {
    name: (0, ($parcel$interopDefault($hUpBc$proptypes))).string.isRequired,
    data: (0, ($parcel$interopDefault($hUpBc$proptypes))).any,
    isCollapsed: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    keyPath: (0, ($parcel$interopDefault($hUpBc$proptypes))).array,
    deep: (0, ($parcel$interopDefault($hUpBc$proptypes))).number,
    handleRemove: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    handleUpdateValue: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    onUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    onDeltaUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    addButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    textareaElementGenerator: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired,
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    plusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    beforeRemoveAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeAddAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeUpdateAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object.isRequired,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func.isRequired
};
// Default props
const $238ab26352b317ed$var$defaultProps = {
    keyPath: [],
    deep: 0
};
/* ************************************* */ /* ********      COMPONENT      ******** */ /* ************************************* */ class $238ab26352b317ed$var$JsonNode extends (0, $hUpBc$react.Component) {
    componentWillReceiveProps(nextProps) {
        this.setState({
            data: nextProps.data
        });
    }
    render() {
        const { data: data , name: name , keyPath: keyPath , deep: deep  } = this.state;
        const { isCollapsed: isCollapsed , handleRemove: handleRemove , handleUpdateValue: handleUpdateValue , onUpdate: onUpdate , onDeltaUpdate: onDeltaUpdate , readOnly: readOnly , getStyle: getStyle , addButtonElement: addButtonElement , cancelButtonElement: cancelButtonElement , editButtonElement: editButtonElement , inputElementGenerator: inputElementGenerator , textareaElementGenerator: textareaElementGenerator , minusMenuElement: minusMenuElement , plusMenuElement: plusMenuElement , beforeRemoveAction: beforeRemoveAction , beforeAddAction: beforeAddAction , beforeUpdateAction: beforeUpdateAction , logger: logger , onSubmitValueParser: onSubmitValueParser  } = this.props;
        const readOnlyTrue = ()=>true;
        const dataType = (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(data);
        switch(dataType){
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).ERROR:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $845f1b807cc009ad$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).OBJECT:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $845f1b807cc009ad$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).ARRAY:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $2c803c9d02b52f75$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).NUMBER:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).BOOLEAN:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).DATE:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).NULL:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).UNDEFINED:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).STRING:
                // case dataTypes.FUNCTION:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $d3a1b610f878e9aa$export$2e2bcd8739ae039), {
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
            case (0, $d40b8b9d71ae28d9$export$2e2bcd8739ae039).SYMBOL:
                return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $0e722cdde5701c82$export$2e2bcd8739ae039), {
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
$238ab26352b317ed$var$JsonNode.propTypes = $238ab26352b317ed$var$propTypes;
// Add default props
$238ab26352b317ed$var$JsonNode.defaultProps = $238ab26352b317ed$var$defaultProps;
var /* ************************************* */ /* ********       EXPORTS       ******** */ /* ************************************* */ $238ab26352b317ed$export$2e2bcd8739ae039 = $238ab26352b317ed$var$JsonNode;


/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 20/10/16
 * Licence: See Readme
 */ /* ************************************* */ /* ********       IMPORTS       ******** */ /* ************************************* */ /* ************************************* */ /* ********      VARIABLES      ******** */ /* ************************************* */ const $68d1bd3106aa4b54$export$be5493f9613cbbe = {
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
const $68d1bd3106aa4b54$export$2f23118c22fb2630 = {
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
const $68d1bd3106aa4b54$export$2ab9a8f9f1186f14 = {
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
const $d3d910001b9b49c3$var$propTypes = {
    data: (0, ($parcel$interopDefault($hUpBc$proptypes))).any.isRequired,
    rootName: (0, ($parcel$interopDefault($hUpBc$proptypes))).string,
    isCollapsed: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    onFullyUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    onDeltaUpdate: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    readOnly: (0, ($parcel$interopDefault($hUpBc$proptypes))).oneOfType([
        (0, ($parcel$interopDefault($hUpBc$proptypes))).bool,
        (0, ($parcel$interopDefault($hUpBc$proptypes))).func
    ]),
    getStyle: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    addButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    cancelButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    editButtonElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    inputElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).oneOfType([
        (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
        (0, ($parcel$interopDefault($hUpBc$proptypes))).func
    ]),
    textareaElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).oneOfType([
        (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
        (0, ($parcel$interopDefault($hUpBc$proptypes))).func
    ]),
    minusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    plusMenuElement: (0, ($parcel$interopDefault($hUpBc$proptypes))).element,
    beforeRemoveAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeAddAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    beforeUpdateAction: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    logger: (0, ($parcel$interopDefault($hUpBc$proptypes))).object,
    onSubmitValueParser: (0, ($parcel$interopDefault($hUpBc$proptypes))).func,
    allowFunctionEvaluation: (0, ($parcel$interopDefault($hUpBc$proptypes))).bool
};
// Default props
const $d3d910001b9b49c3$var$defaultProps = {
    rootName: "root",
    isCollapsed: (keyPath, deep)=>deep !== -1,
    getStyle: (keyName, data, keyPath, deep, dataType)=>{
        switch(dataType){
            case "Object":
            case "Error":
                return 0, $68d1bd3106aa4b54$export$be5493f9613cbbe;
            case "Array":
                return 0, $68d1bd3106aa4b54$export$2f23118c22fb2630;
            default:
                return 0, $68d1bd3106aa4b54$export$2ab9a8f9f1186f14;
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
    inputElement: (usage, keyPath, deep, keyName, data, dataType)=>/*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("textarea", null),
    textareaElement: (usage, keyPath, deep, keyName, data, dataType)=>/*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("textarea", null),
    /* eslint-enable no-unused-vars */ allowFunctionEvaluation: true
};
const $d3d910001b9b49c3$var$createParsingFunction = (allowFunctionEvaluation)=>(isEditMode, keyPath, deep, name, rawValue)=>(0, $cd404796c303f47e$export$2e2bcd8739ae039)(rawValue, allowFunctionEvaluation);
/* ************************************* */ /* ********    COMPONENT    ******** */ /* ************************************* */ class $d3d910001b9b49c3$export$77412d412e77b482 extends (0, $hUpBc$react.Component) {
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
            onSubmitValueParser: $d3d910001b9b49c3$var$createParsingFunction(nextProps.allowFunctionEvaluation)
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
        const dataType = (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(data);
        let node = null;
        let readOnlyFunction = readOnly;
        if ((0, $17f91d8de531be86$export$11cc42aebef2ef3a)(readOnly) === "Boolean") readOnlyFunction = ()=>readOnly;
        let inputElementFunction = inputElement;
        if (inputElement && (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(inputElement) !== "Function") inputElementFunction = ()=>inputElement;
        let textareaElementFunction = textareaElement;
        if (textareaElement && (0, $17f91d8de531be86$export$11cc42aebef2ef3a)(textareaElement) !== "Function") textareaElementFunction = ()=>textareaElement;
        if (dataType === "Object" || dataType === "Array") node = /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement((0, $238ab26352b317ed$export$2e2bcd8739ae039), {
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
        return /*#__PURE__*/ (0, ($parcel$interopDefault($hUpBc$react))).createElement("div", {
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
            onSubmitValueParser = $d3d910001b9b49c3$var$createParsingFunction(props.allowFunctionEvaluation);
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
$d3d910001b9b49c3$export$77412d412e77b482.propTypes = $d3d910001b9b49c3$var$propTypes;
// Add default props
$d3d910001b9b49c3$export$77412d412e77b482.defaultProps = $d3d910001b9b49c3$var$defaultProps;


//# sourceMappingURL=JsonTree.cjs.js.map
