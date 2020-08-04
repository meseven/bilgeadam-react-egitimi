import React from "react";

function Content() {
	return (
		<>
			<section hidden="[count(todo) = 0]" className="main">
				<input
					property="toggleAll"
					id="toggle-all"
					className="toggle-all"
					type="checkbox"
					checked="[todoLeft = 0]"
				/>
				<label htmlFor="toggle-all" mv-action="set(done, !toggleAll)">
					Mark all as complete
				</label>

				<ul className="todo-list">
					<li mv-multiple="todo" className="[if(done, 'completed')]">
						<div className="view">
							<input property="done" className="toggle" type="checkbox" />
							<label property="text">Taste JavaScript</label>
							<button className="destroy" mv-action="delete(todo)"></button>
						</div>
					</li>
				</ul>
			</section>

			<footer hidden="[count(todo) = 0]" className="footer">
				<meta property="todoDone" content="22" />
				<meta property="todoLeft" content="[count(todo where !done)]" />

				<span className="todo-count">
					<strong mv-value="todoLeft">0</strong>
					[if(todoLeft = 1, 'item', 'items')] left
				</span>

				<meta property="activeFilter" content="all" mv-storage="none" />
				<ul className="filters">
					<li>
						<a href="#" className="[if(activeFilter = 'all', 'selected')]">
							All
						</a>
					</li>
					<li>
						<a href="#" className="[if(activeFilter = 'active', 'selected')]">
							Active
						</a>
					</li>
					<li>
						<a
							href="#"
							className="[if(activeFilter = 'completed', 'selected')]"
						>
							Completed
						</a>
					</li>
				</ul>
				<button
					hidden="[todoDone = 0]"
					className="clear-completed"
					mv-action="delete(todo where done)"
				>
					Clear completed
				</button>
			</footer>
		</>
	);
}

export default Content;
