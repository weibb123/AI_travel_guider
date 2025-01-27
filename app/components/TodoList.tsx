import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

type Task = {
    id: string;
    text: string;
};

export default function TodoList() {
    const [task, setTask] = useState<string>('');
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { id: Math.random().toString(), text: task }]);
            setTask('');
        }
    };

    const deleteTask = (id: string) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>To-do List</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Add a task"
                    value={task}
                    onChangeText={setTask}
                />
                <Button title="Add" onPress={addTask} />
            </View>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.taskItem}>
                        <Text style={styles.taskText}>{item.text}</Text>
                        <TouchableOpacity onPress={() => deleteTask(item.id)}>
                            <Text style={styles.deleteText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}