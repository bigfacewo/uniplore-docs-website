### 组件介绍
**“轮廓图（Silhouette Plot）”**控件用于对分类多变量数据进行对应分析。Correspondence Analysis（CA）根据输入数据集，计算其对应的线性变换。和 PCA 相似，CA 被用来计算离散数据而非连续数据的线性变换。
<hr/>

- 输入：
  - data：数据集
- 输出：
  - 无

<hr/>


### 页面介绍
点击**“轮廓图（Silhouette Plot）”**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/visualize/silhouette-plot/param.png) ](/img/aistudio/visualize/silhouette-plot/param.png)

点击**“查看结果”**按钮，查看数据集详情：  
[ ![](/img/aistudio/visualize/silhouette-plot/visualization.png) ](/img/aistudio/visualize/silhouette-plot/visualization.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>距离</td> 
      <td>
      距离度量方式
      &emsp;&emsp;欧式距离
      &emsp;&emsp;曼哈顿距离
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>聚类标签</td> 
      <td>
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>按类分组</td> 
      <td>
      是否根据聚类标签进行分组
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件（File）”**控件加载数据集，接着使用**“轮廓图（Silhouette Plot）”**控件查看轮廓图。  
[ ![](/img/aistudio/visualize/silhouette-plot/workflow.png) ](/img/aistudio/visualize/silhouette-plot/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。
[ ![](/img/aistudio/visualize/silhouette-plot/workflow-result.png) ](/img/aistudio/visualize/silhouette-plot/workflow-result.png)