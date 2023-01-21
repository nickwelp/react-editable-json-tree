/*
 * Author: Alexandre Havrileck (Oxyno-zeta)
 * Date: 13/11/16
 * Licence: See Readme
 */
/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isComponentWillChange } from '../utils/objectTypes';
import inputUsageTypes from '../types/inputUsageTypes';
import { functionToString } from '../utils/parse';
import { handleHotkeys } from "../utils/hotkeys";

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
// Prop types
const propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    originalValue: PropTypes.any,
    keyPath: PropTypes.array,
    deep: PropTypes.number,
    handleRemove: PropTypes.func,
    handleUpdateValue: PropTypes.func,
    readOnly: PropTypes.func.isRequired,
    dataType: PropTypes.string,
    getStyle: PropTypes.func.isRequired,
    editButtonElement: PropTypes.element,
    cancelButtonElement: PropTypes.element,
    textareaElementGenerator: PropTypes.func.isRequired,
    minusMenuElement: PropTypes.element,
    logger: PropTypes.object.isRequired,
    onSubmitValueParser: PropTypes.func.isRequired,
};
// Default props
const defaultProps = {
    keyPath: [],
    deep: 0,
    handleUpdateValue: () => {
    },
    editButtonElement: <button>Apply</button>,
    cancelButtonElement: <button>Cancel</button>,
    minusMenuElement: <span> - </span>,
};

/* ************************************* */
/* ********      COMPONENT      ******** */
/* ************************************* */
class JsonFunctionValue extends Component {
    constructor(props) {
        super(props);
        const keyPath = [
            ...props.keyPath,
            props.name,
        ];
        this.state = {
            value: props.value,
            name: props.name,
            keyPath,
            deep: props.deep,
            editEnabled: true,
            inputRef: null,
        };

        // Bind
        this.handleEditMode = this.handleEditMode.bind(this);
        this.refInput = this.refInput.bind(this);
        this.handleCancelEdit = this.handleCancelEdit.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: nextProps.value,
        });
    }

    componentDidUpdate() {
        const { editEnabled, inputRef, name, value, keyPath, deep } = this.state;
        const { readOnly, dataType } = this.props;
        const readOnlyResult = readOnly(name, value, keyPath, deep, dataType);

        if (editEnabled && !readOnlyResult && (typeof inputRef.focus === 'function')) {
            inputRef.focus();
        }
    }

    handleEdit() {
        const { handleUpdateValue, originalValue, logger, onSubmitValueParser, keyPath } = this.props;
        const { inputRef, name, deep } = this.state;

        const newValue = onSubmitValueParser(true, keyPath, deep, name, inputRef.value);

        const result = {
            value: newValue,
            key: name,
        };

        // Run update
        handleUpdateValue(result).then(() => {
            // Cancel edit mode if necessary
            if (!isComponentWillChange(originalValue, newValue)) {
                this.handleCancelEdit();
            }
        }).catch(logger.error);
    }

    handleEditMode() {
        this.setState({
            editEnabled: true,
        });
    }

    refInput(node) {
        this.state.inputRef = node;
    }

    handleCancelEdit() {
        this.setState({
            editEnabled: false,
        });
    }

    render() {
        const { name, value, editEnabled, keyPath, deep } = this.state;
        const {
            handleRemove,
            originalValue,
            readOnly,
            dataType,
            getStyle,
            editButtonElement,
            cancelButtonElement,
            textareaElementGenerator,
            minusMenuElement,
            keyPath: comeFromKeyPath,
            } = this.props;

        const hotkeys = {
            Escape: this.handleCancelEdit,
            Enter: this.handleEdit,
        };
        console.log('keyPath', keyPath);

        const style = getStyle(name, originalValue, keyPath, deep, dataType);
        let result = null;
        let minusElement = null;
        const resultOnlyResult = readOnly(name, originalValue, keyPath, deep, dataType);

        if (editEnabled && !resultOnlyResult) {
            const textareaElement =
                textareaElementGenerator(inputUsageTypes.VALUE, comeFromKeyPath, deep, name, originalValue, dataType);

            const editButtonElementLayout = React.cloneElement(editButtonElement, {
                onClick: this.handleEdit,
            });
            const cancelButtonElementLayout = React.cloneElement(cancelButtonElement, {
                onClick: this.handleCancelEdit,
            });
            const textareaElementLayout = React.cloneElement(textareaElement, {
                ref: this.refInput,
                defaultValue: functionToString(originalValue),
                onKeyUp: handleHotkeys(hotkeys),
            });

            result = (<span className="rejt-edit-form" style={style.editForm}>
                {textareaElementLayout} {cancelButtonElementLayout}{editButtonElementLayout}
            </span>);
        } else {
            /* eslint-disable jsx-a11y/no-static-element-interactions */
            result = (
                <span
                    className="rejt-value" style={style.value} onClick={resultOnlyResult ? null : this.handleEditMode}
                >
                    {value}
                </span>
            );
        }
        if (!result || result === "") return null;
        if (keyPath.includes('textLine')
            || keyPath.includes('title')
            || keyPath.includes('description')
            || keyPath.includes('name')
            || keyPath.includes('stringValue')
            || keyPath.includes('stringsList')
            ) {
            return (
                <li className="rejt-function-value-node" style={style.li}>
                    <span className="rejt-name" style={style.name}>{name} : </span>{result}
                </li>
            );
        }
        return null;
    }
}

// Add prop types
JsonFunctionValue.propTypes = propTypes;
// Add default props
JsonFunctionValue.defaultProps = defaultProps;

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default JsonFunctionValue;
