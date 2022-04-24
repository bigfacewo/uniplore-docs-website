### 组件介绍
**“K-Modes”**控件基于对分类属性型数据的采用的聚类算法来划分数据。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集
  - cen：每个簇的中心点

<hr/>


### 页面介绍
点击**“K-Modes”**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/clustering/kmodes/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>簇数量</td> 
      <td>
      指定簇数
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>最大迭代数</td> 
      <td>
      算法运行的最大迭代次数
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，**连接**“K-Modes”**控件进行聚类，之后连接**“查看数据”（Data Table）**控件查看聚类结果。  
![workflow](/img/aistudio/clustering/kmodes/workflow.png)

案例中加载“iris”数据集，案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/clustering/kmodes/workflow-result.png)