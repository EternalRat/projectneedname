import { Outlet, Route, Routes } from 'react-router-dom';

import { Auth } from '../views/Auth/Auth';
import { Error404 } from '../views/Error/404';
import { Home } from '../views/Home/Home';
import { ProjectConfig } from '../views/Panel/Project/Informations/Config/ProjectConfig';
import { ProjectIssues } from '../views/Panel/Project/Informations/Issues/ProjectIssues';
import { ProjectKanban } from '../views/Panel/Project/Informations/Kanban/ProjectKanban';
import { ProjectMember } from '../views/Panel/Project/Informations/Member/ProjectMember';
import { ProjectDetail } from '../views/Panel/Project/Informations/ProjectDetail';
import { ProjectRoadmap } from '../views/Panel/Project/Informations/Roadmap/ProjectRoadmap';
import { Projects } from '../views/Panel/Project/Projects';
import { TeamConfig } from '../views/Panel/Team/Config/TeamConfig';
import { TeamMembers } from '../views/Panel/Team/Members/TeamMembers';
import { Teams } from '../views/Panel/Team/Team';
import { TodolistDetail } from '../views/Panel/Todolist/Detail/TodolistDetail';
import { Todolist } from '../views/Panel/Todolist/Todolist';

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/auth' element={<Auth />} />
			<Route key='/panel' element={<Outlet />}>
				<Route key='/projects' element={<Outlet />}>
					<Route path='panel/projects' element={<Projects />} />
					<Route key='/detail' element={<Outlet />}>
						<Route
							path='panel/projects/detail/:id'
							element={<ProjectDetail />}
						/>
						<Route
							path='panel/projects/detail/:id/roadmap'
							element={<ProjectRoadmap />}
						/>
						<Route
							path='panel/projects/detail/:id/member'
							element={<ProjectMember />}
						/>
						<Route
							path='panel/projects/detail/:id/kanban'
							element={<ProjectKanban />}
						/>
						<Route
							path='panel/projects/detail/:id/issues'
							element={<ProjectIssues />}
						/>
						<Route
							path='panel/projects/detail/:id/config'
							element={<ProjectConfig />}
						/>
					</Route>
				</Route>
				<Route key='/teams' element={<Outlet />}>
					<Route path='/panel/teams' element={<Teams />} />
					<Route key='/detail' element={<Outlet />}>
						<Route
							path='/panel/teams/detail/:id/members'
							element={<TeamMembers />}
						/>
						<Route
							path='/panel/teams/detail/:id/config'
							element={<TeamConfig />}
						/>
					</Route>
				</Route>
				<Route key='/todolist' element={<Outlet />}>
					<Route path='/panel/todolist' element={<Todolist />} />
					<Route key='/detail' element={<Outlet />}>
						<Route
							path='/panel/todolist/detail/:id'
							element={<TodolistDetail />}
						/>
					</Route>
				</Route>
			</Route>
			<Route path='*' element={<Error404 />} />
		</Routes>
	);
};
