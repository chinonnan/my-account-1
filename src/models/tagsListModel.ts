const localStorageKeyName = 'tagList';
type TagsListModel =
  {
    data: stirng[];
    fetch: () => string[];
    create: (name: string) => 'success' | 'duplicated';  //联合类型
    save: () => void;
  }
const tagListModel: TagsListModel = {
  data: [],
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
  },
  create(name) {
    if(this.data.indexOf(name) >= 0){
      return 'duplicated';
    }
    this.data.push(name);
    this.save();
    return 'success';
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};


export {tagListModel};