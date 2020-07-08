function save(object) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(object, function() { resolve(true); });
  });
}

function read(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(key, function(items) {resolve(items[key]); });
  });
}

function remove(keyOrKeys) {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.remove(keyOrKeys, function() {resolve(true); });
  });
}

function clear() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.clear(function() {resolve(true); });
  });
}

function saveLocal(object) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.set(object, function() { resolve(true); });
  });
}

function readLocal(key) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.get(key, function(items) {resolve(items[key]); });
  });
}

function removeLocal(keyOrKeys) {
  return new Promise((resolve, reject) => {
    chrome.storage.local.remove(keyOrKeys, function() {resolve(true); });
  });
}
