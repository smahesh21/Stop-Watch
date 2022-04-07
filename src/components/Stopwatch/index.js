import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {isTimerRunning: false, timerInSeconds: 0}

  componentWillUnmount() {
    this.clearTimer(this.intervalId)
  }

  onClickReset = () => {
    this.clearTimer(this.intervalId)
    this.setState({isTimerRunning: false, timerInSeconds: 0})
  }

  updateTimer = () => {
    this.setState(prevState => ({timerInSeconds: prevState.timerInSeconds + 1}))
  }

  clearTimer = () => clearInterval(this.intervalId)

  onClickStart = () => {
    this.intervalId = setInterval(this.updateTimer, 1000)
  }

  onClickStop = () => {
    this.clearTimer(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  displaySeconds = () => {
    const {timerInSeconds} = this.state

    const seconds = Math.floor(timerInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  displayMinutes = () => {
    const {timerInSeconds} = this.state
    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.displayMinutes()}:${this.displaySeconds()}`
    return (
      <div className="app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stop-watch-card">
          <div className="image-timer-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              className="stopwatch-icon"
              alt="stopwatch"
            />
            <h1 className="timer-text">Timer</h1>
          </div>
          <p className="timer">{time}</p>
          <div className="buttons-section">
            <button
              type="button"
              onClick={this.onClickStart}
              className="start-button button"
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.onClickStop}
              className="stop-button button"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.onClickReset}
              className="reset-button button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
