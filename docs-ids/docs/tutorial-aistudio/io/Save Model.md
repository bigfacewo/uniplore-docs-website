### 组件介绍
**“保存模型”（Save Model）**控件将已训练的模型保存为文件。

<hr/>

- 输入：
  - mod：已训练的模型
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“保存模型”（Save Model）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/io/save-model/param.png) ](/img/aistudio/io/save-model/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>文件名</td> 
      <td>
      需要保存的文件名称
      </td> 
      <td>mydata</td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（save-model）**控件加载样例数据集，连接**“决策树”（Tree）**控件进行模型构建，之后使用**“保存模型”（Save Model）**控件与**“决策树”（Tree）**控件连接，用于保存已经构建的决策树模型。  
[ ![](/img/aistudio/io/save-model/workflow.png) ](/img/aistudio/io/save-model/workflow.png)

案例中加载 titanic 数据集。**“决策树”（Tree）**控件采用默认配置。构建好的模型保存为 titanic-tree-model.pkcls 文件。案例中控件的配置及运行结果如下图所示。
[ ![](/img/aistudio/io/save-model/workflow-result.png) ](/img/aistudio/io/save-model/workflow-result.png)