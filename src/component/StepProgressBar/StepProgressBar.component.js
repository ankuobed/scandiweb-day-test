import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './StepProgressBar.style.scss'


export default class StepProgressBar extends Component {
    static propTypes = {
        steps: PropTypes.arrayOf(PropTypes.string),
        currentStep: PropTypes.string,
    }

    formatStepName = (name) => {
        const word = name.split('_')[0];
        const result = `${word.charAt(0)}${word.toLowerCase().slice(1)}`;
        return result;
    }
    
    render() {
        const currentIndex = this.props.steps.indexOf(this.props.currentStep)

        return (
        <div className="container">
            {
                this.props.steps.map((step, i) => {
                    const isActive = i <= currentIndex;
                    const isCompleted = i < currentIndex;

                    return (
                        <div className="step-item">
                            <div className="divider">
                                <div className={`fill ${isActive && 'active-fill'}`}></div>
                            </div>
                            {
                                i < this.props.steps.length - 1 &&
                                <div className="step">
                                    <div className={`number ${isCompleted && 'active-number'}`}>
                                        {
                                            isCompleted ? <span>&#10003;</span> : i + 1
                                        }
                                    </div>
                                    <div className={`name ${isActive && 'active-name'}`}>{this.formatStepName(step)}</div>
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
        )
    }
}
