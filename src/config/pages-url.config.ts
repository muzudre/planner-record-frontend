class DASHBOARD {
	private root = '/i'

	HOME = this.root
	TASKS = `${this.root}/tasks`
	HABITS = `${this.root}/habits`
	TIMER = `${this.root}/timer`
	TIMER_BLOCKING = `${this.root}/timer-blocking`
	SETTINGS = `${this.root}/settings`
}

export const DASHBOARD_PAGES = new DASHBOARD()
