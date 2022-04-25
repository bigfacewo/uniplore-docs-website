### 组件介绍
**“决策树查看器（Tree Viewer）”**控件用于对分类多变量数据进行对应分析。Correspondence Analysis（CA）根据输入数据集，计算其对应的线性变换。和 PCA 相似，CA 被用来计算离散数据而非连续数据的线性变换。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“决策树查看器（Tree Viewer）”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/model/tree-viewer/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
![visualization-1](/img/aistudio/model/tree-viewer/visualization-1.png)

#### 参数选项
<table>
  <tr>
    <th></th>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>节点</td> 
      <td>
      节点个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>叶子</td> 
      <td>
      叶子节点个数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>深度</td> 
      <td>
      树显示的深度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>边宽</td> 
      <td>
      树的边宽
      &emsp;&emsp;固定宽度：所有边的宽度相同 <br/>
      &emsp;&emsp;相对宽度（根）：边的宽度根据节点中实例相对于训练数据中的所有实例的比列进行变化 <br/>
      &emsp;&emsp;相对宽度（父）：边的宽度根据节点中实例相对于父节点中的实例的比例进行变化 <br/>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>目标类</td> 
      <td>
      树中只展示该值相关信息
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“决策树（Tree）”**控件训练决策树模型，最后使用**“决策树查看器（Tree Viewer）”**控件查看模型。  
![workflow](/img/aistudio/model/tree-viewer/workflow.png)

案例中加载“iris”数据集，**“决策树（Tree）”**控件使用默认配置，**“决策树查看器（Tree Viewer）”**控件中深度选项选择不限。案例中控件的配置以及执行结果如下图所示。  
![visualization-2](/img/aistudio/model/tree-viewer/visualization-2.png)