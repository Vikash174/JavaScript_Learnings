
class DOMHelper{
 
  static clearEventListeners(element){
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId,newDestinationSelector){
    const element = document.getElementById(elementId);
    const destinationELement = document.querySelector(newDestinationSelector);
    destinationELement.append(element);
  }
}

class ToolTip {}

class ProjectItem {
  constructor(id,updateProjectListsFunction,type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  connectMoreInfoButton() {}
  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelectorAll("button")[1];
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent =  type === 'active' ? 'Finish' : 'Active';
    // console.log(switchBtn);
    switchBtn.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id));
  }

  update(updateProjectListFunciton, type){
    this.updateProjectListsHandler = updateProjectListFunciton;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(new ProjectItem(prjItem.id,this.switchProject.bind(this),this.type));
    }
    // console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id,`#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this),this.type);
    // console.log(this);
  }

  switchProject(projectId) {
    /* const projectIndex = this.projects.findIndex((p) => p.id === projectId);
    this.projects.splice(projectIndex, 1); */
    this.switchHandler(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList("active");
    const finishedProjectsList = new ProjectList("finished");
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();
