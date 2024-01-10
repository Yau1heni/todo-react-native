import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1/',
  withCredentials: true,
  headers: {
    'API-KEY': '74b20b39-b919-4602-9deb-09e488e0a998',
    'cookie': '_ym_uid=1680728062636435660; _ym_d=1680728062; ASP.NET_SessionId=axd25y4jjtok5lqez1nd3z3r; .ASPXAUTH=5032CFC1D1DE489978A7411E77A61939E87455BD9910FE8BB65CAA5EE3BE80A5E8D621F608DEAA774D937AC123BB9A3323C1C9DC75D0223BBB61828B20608C175663549F40C486C4DAC0CB8F889FFA55A6E98F7D'
  }
});

// api
export const todolistsAPI = {
  getTodolists() {
    return instance.get<TodolistType[]>('todo-lists');
  },
  createTodolist(title: string) {
    return instance.post<ResponseType<{
      item: TodolistType
    }>, AxiosResponse<ResponseType<{
      item: TodolistType
    }>>, {
      title: string
    }>('todo-lists', {title});
  },
  deleteTodolist(id: string) {
    return instance.delete<ResponseType>(`todo-lists/${id}`);
  },
  updateTodolist(id: string, title: string) {
    return instance.put<ResponseType, AxiosResponse<ResponseType>, {
      title: string
    }>(`todo-lists/${id}`, {title});
  },
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
  },
  createTask(todolistId: string, title: string) {
    return instance.post<ResponseType<{
      item: TaskType
    }>, AxiosResponse<ResponseType<{
      item: TaskType
    }>>, {
      title: string
    }>(`todo-lists/${todolistId}/tasks`, {title});
  },
  updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
    return instance.put<ResponseType<{
      item: TaskType
    }>, AxiosResponse<ResponseType<{
      item: TaskType
    }>>, UpdateTaskModelType>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
  }
};

// types
export type TodolistType = {
  id: string
  title: string
  addedDate: string
  order: number
}
export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}


export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4
}

export type TaskType = {
  description: string
  title: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}
export type UpdateTaskModelType = {
  title: string
  description: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
}
type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: TaskType[]
}
