### 组件介绍
**“随机森林查看器（Random Forest Viewer）”**控件可用于可视化随机森林模型。
<hr/>

- 输入：
  - mod：随机森林模型
- 输出：
  - mod：选定的树模型

<hr/>


### 页面介绍
点击**“随机森林查看器（Random Forest Viewer）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/random-forest-viewer/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization-1](/img/aistudio/model/random-forest-viewer/visualization-1.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>森林信息</td> 
      <td>
      显示随机森林中树的数量
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>树深度</td> 
      <td>
      可视化图中显示的每棵树的深度
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着在**“随机森林查看器（Random Forest Viewer）”**控件前连接一个**“随机森林（Random Forest）”**控件。
![workflow](/img/aistudio/model/random-forest-viewer/workflow.png)

案例中加载“iris”数据集，其余使用默认参数。案例中控件的配置以及执行结果如下图所示。
![visualization-2](/img/aistudio/model/random-forest-viewer/visualization-2.png)